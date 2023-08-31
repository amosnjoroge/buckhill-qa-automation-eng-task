import { Product } from '..';
import { loginModal, signUpModal } from '../selectors/access';
import { common } from '../selectors/common';
import { addToCartButton, imageSrc } from '../selectors/product';
import { buildUser } from '../utils/test-data';

const login = (email: string, password: string) => {
  cy.intercept('POST', '/api/v1/user/login').as('loginRequest');
  cy.visit('/');
  cy.contains(common.navigationBar.loginButton).click();
  cy.contains(loginModal.emailInputLabel).parent().find('input').type(email);
  cy.contains(loginModal.passwordInputLabel)
    .parent()
    .find('input')
    .type(password);
  cy.contains('button', loginModal.loginButton).click();

  cy.wait('@loginRequest').then(({ response }) => {
    cy.wrap(response.statusCode).should('eq', 200);
    cy.wrap(response.body.data.token).as('accessToken');
  });
  cy.get(common.navigationBar.avatarAriaLabel).should('be.visible');
};

const signUp = (user = buildUser()) => {
  cy.contains(common.navigationBar.loginButton).click();
  cy.contains(loginModal.registerLinkLabel).click();

  cy.contains(signUpModal.firstNameInputLabel)
    .parent()
    .find('input')
    .type(user.first_name);
  cy.contains(signUpModal.lastNameInputLabel)
    .parent()
    .find('input')
    .type(user.last_name);
  cy.contains(signUpModal.emailInputLabel)
    .parent()
    .find('input')
    .type(user.email);
  cy.contains(signUpModal.phoneInputLabel)
    .parent()
    .find('input')
    .type(user.phone_number);
  cy.contains(signUpModal.addressInputLabel)
    .parent()
    .find('input')
    .type(user.address);
  cy.contains(signUpModal.passwordInputLabel)
    .parent()
    .find('input')
    .type(user.password);
  cy.contains(signUpModal.passwordConfirmationInputLabel)
    .parent()
    .find('input')
    .type(user.password);
  if (user.is_marketing)
    cy.contains(signUpModal.isMarketingCheckboxLabel)
      .parent()
      .find('input')
      .check();
  cy.contains(signUpModal.registerButton).click();

  cy.wrap(user).as('newUser');
};

const addToCart = (product: string) => {};

const removeFromCart = (product: string) => {};

const checkout = () => {};

const viewProduct = (productTitle: string) => {
  cy.contains(productTitle).click();
  cy.wait('@productRequest').then(({ response }) => {
    cy.wrap(response.statusCode).should('eq', 200);

    const { data } = response.body;

    const product: Product = {
      uuid: data.uuid,
      title: data.title,
      price: data.price,
      description: data.description,
      imageId: data.metadata.image,
      category: data.category.title,
    };

    cy.validateProductPageDetails(product);
  });
};

const searchProduct = (keyword: string, productToView?: string) => {
  cy.contains('label', common.search.label)
    .parent()
    .find('input')
    .type(`${keyword}{enter}`);
  cy.wait('@searchRequest').then(({ response }) => {
    cy.wrap(response.statusCode).should('eq', 200);

    const products: Product[] = response.body.data.map((dataItem) => ({
      uuid: dataItem.uuid,
      title: dataItem.title,
      price: dataItem.price,
      description: dataItem.description,
      imageId: dataItem.metadata.image,
      category: dataItem.category.title,
      quantity: dataItem.quantity,
    }));

    cy.get(common.search.resultsPanelClass)
      .should('be.visible')
      .within(() => {
        cy.get(common.search.resultItemClass)
          .should('have.length', products.length)
          .each(($item, index) => {
            cy.wrap($item)
              .should('be.visible')
              .and('contain.text', keyword)
              .and('have.text', products[index].title);
          });
      });

    if (productToView) {
      const product = products.find(
        (product) => product.title === productToView
      );
      cy.intercept('GET', `/api/v1/product/${product.uuid}`).as(
        'productRequest'
      );
      cy.contains(productToView).click();
      cy.wait('@productRequest');
      cy.validateProductPageDetails(product);
    }
  });
};

const validateProductPageDetails = (product: Product) => {
  validateCategoryProductCard(product);
  cy.contains(product.description).should('be.visible');
};

const validateCategoryProductCard = (product: Product) => {
  cy.contains(product.title).should('be.visible');
  if (product.imageId === '') {
    throw new Error('Product imageId is empty');
  }
  cy.get(imageSrc(product.imageId)).should('be.visible');
  cy.contains(`${product.price} Kn`).should('be.visible');
  cy.contains(product.category).should('be.visible');
  cy.contains('button', addToCartButton).should('be.visible');
};

Cypress.Commands.addAll({
  signUp,
  login,
  viewProduct,
  searchProduct,
  validateProductPageDetails,
  validateCategoryProductCard,
});
