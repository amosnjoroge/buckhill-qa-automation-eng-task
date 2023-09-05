import { Product, User } from '..';
import { loginModal, signUpModal } from '../selectors/access';
import { customerPage, productPage } from '../selectors/admin';
import { common } from '../selectors/common';
import { addToCartButton, imageSrc } from '../selectors/product';
import { buildProduct, buildUser } from '../utils/test-data';

const login = ({
  email = Cypress.env('ADMIN_EMAIL') as string,
  password = Cypress.env('ADMIN_PASSWORD') as string,
  admin = false,
} = {}) => {
  if (admin) {
    cy.visit('/login');
  } else {
    cy.visit('/');
    cy.contains(common.navigationBar.loginButton).click();
  }

  cy.contains(loginModal.emailInputLabel).parent().find('input').type(email);
  cy.contains(loginModal.passwordInputLabel)
    .parent()
    .find('input')
    .type(password);
  if (!admin)
    cy.contains(loginModal.rememberMeCheckbox).parent().find('input').check();
  cy.contains('button', loginModal.loginButton).click();

  cy.wait(admin ? '@adminLoginRequest' : '@userLoginRequest').then(
    ({ response }) => {
      cy.wrap(response.statusCode).should('eq', 200);
      cy.wrap(response.body.data.token, { log: false }).as('accessToken');
      globalThis.accessToken = response.body.data.token;
    }
  );
  cy.get(common.navigationBar.avatarAriaLabel).should('be.visible');
};

const fillNewUserForm = (
  user: Partial<User>,
  { edit = false, admin = false } = {}
) => {
  const {
    firstNameLabel,
    lastNameLabel,
    emailLabel,
    phoneLabel,
    addressLabel,
    locationLabel,
    passwordLabel,
    passwordConfirmationLabel,
  } = common.userForm;
  if (user.first_name)
    cy.contains(firstNameLabel)
      .parent()
      .find('input')
      .then(($input) => {
        if (edit) {
          cy.wrap($input).clear();
        }
        cy.wrap($input).type(user.first_name);
      });
  if (user.last_name)
    cy.contains(lastNameLabel)
      .parent()
      .find('input')
      .then(($input) => {
        if (edit) {
          cy.wrap($input).clear();
        }
        cy.wrap($input).type(user.last_name);
      });
  if (user.email)
    cy.contains(emailLabel)
      .parent()
      .find('input')
      .then(($input) => {
        if (edit) {
          cy.wrap($input).clear();
        }
        cy.wrap($input).type(user.email);
      });
  if (user.phone_number)
    cy.contains(phoneLabel)
      .parent()
      .find('input')
      .then(($input) => {
        if (edit) {
          cy.wrap($input).clear();
        }
        cy.wrap($input).type(user.phone_number);
      });
  if (user.address)
    cy.contains(admin ? locationLabel : addressLabel)
      .parent()
      .find('input')
      .then(($input) => {
        if (edit) {
          cy.wrap($input).clear();
        }
        cy.wrap($input).type(user.address);
      });
  if (user.password) {
    cy.contains(passwordLabel)
      .parent()
      .find('input')
      .then(($input) => {
        if (edit) {
          cy.wrap($input).clear();
        }
        cy.wrap($input).type(user.password);
      });
    cy.contains(passwordConfirmationLabel)
      .parent()
      .find('input')
      .then(($input) => {
        if (edit) {
          cy.wrap($input).clear();
        }
        cy.wrap($input).type(user.password);
      });
  }
};

const signUp = (user = buildUser()) => {
  cy.contains(common.navigationBar.loginButton).click();
  cy.contains(loginModal.registerLinkLabel).click();
  fillNewUserForm(user);
  if (user.is_marketing)
    cy.contains(signUpModal.isMarketingCheckboxLabel)
      .parent()
      .find('input')
      .check();
  cy.contains(signUpModal.registerButton).click();

  cy.wrap(user).as('newUser');
};

const adminAddCustomer = (user = buildUser()) => {
  cy.contains(customerPage.addNewCustomerLabel).click();
  cy.get(customerPage.customerModalClass)
    .should('be.visible')
    .within(() => {
      cy.contains('.text-h5', customerPage.addNewCustomerLabel).should(
        'be.visible'
      );
      fillNewUserForm(user, { admin: true });
      cy.contains('button', customerPage.addNewCustomerLabel).click({
        force: true,
      });
    });

  cy.wrap(user).as('newUser');
};

const adminEditCustomer = (
  userEmail: string,
  detailsToUpdate: Partial<User>
) => {
  cy.contains(userEmail)
    .parentsUntil('tbody')
    .within(() => {
      cy.get(customerPage.customerActionButtonClass).click();
      cy.get(common.editIconClass).parent().click();
    });
  cy.get(customerPage.customerModalClass)
    .should('be.visible')
    .within(() => {
      cy.contains('.text-h5', customerPage.editCustomerLabel).should(
        'be.visible'
      );
      fillNewUserForm(detailsToUpdate, { admin: true, edit: true });
      cy.contains('button', customerPage.updateCustomerLabel).click({
        force: true,
      });
    });
};

const adminDeleteCustomer = (userEmail: string, fullName: string) => {
  cy.contains(userEmail)
    .parentsUntil('tbody')
    .within(() => {
      cy.get(customerPage.customerActionButtonClass).click();
      cy.get(common.deleteIconClass).parent().click();
    });
  cy.contains(common.deleteConfirmMessage(fullName)).should('be.visible');
  cy.realPress('Tab');
  cy.realPress('Enter');

  cy.contains(userEmail).should('not.exist');
};

const adminAddNewProduct = (product = buildProduct()) => {
  cy.contains(productPage.addNewProductLabel).click();
  cy.get(productPage.productModalClass)
    .should('be.visible')
    .within(() => {
      cy.fixture(product.imageFile, null).as('productImageFile');
      cy.get(productPage.productModalImageInputId).selectFile(
        '@productImageFile',
        { force: true }
      );
      cy.wait('@fileUploadRequest').then(({ response }) => {
        cy.wrap(response.statusCode).should('eq', 200);
        cy.get(imageSrc(response.body.data.uuid)).should('be.visible');
      });
    });

  cy.wrap(product).as('newProduct');
};

const adminEditNewProduct = (
  productTitle: string,
  newProductInfo: Partial<Product>
) => {
  cy.get(productPage.productsListClass).within(() => {
    cy.contains(productTitle)
      .should('be.visible')
      .parentsUntil('tbody')
      .within(() => {
        cy.get(productPage.productActionButtonClass).click();
        cy.get(common.editIconClass).click();
      });
  });
  cy.get(productPage.productModalClass)
    .should('be.visible')
    .within(() => {
      if (newProductInfo.imageFile) {
        cy.fixture(newProductInfo.imageFile, null).as('productImageFile');
        cy.get(productPage.productModalImageInputId).selectFile(
          '@productImageFile',
          { force: true }
        );
        cy.wait('@fileUploadRequest').then(({ response }) => {
          cy.wrap(response.statusCode).should('eq', 200);
          cy.get(imageSrc(response.body.data.uuid)).should('be.visible');
          newProductInfo.imageId = response.body.data.uuid;
        });
      }
      if (newProductInfo.title)
        cy.contains(productPage.productModalNameInputLabel)
          .parent()
          .find('input')
          .clear()
          .type(newProductInfo.title);
      if (newProductInfo.description)
        cy.contains(productPage.productModalDescriptionTextAreaLabel)
          .parent()
          .find('textarea')
          .clear()
          .type(newProductInfo.description);
      cy.contains('button', productPage.productModalSaveButton)
        .should('be.enabled')
        .click();
    });
  cy.get(productPage.productModalClass).should('not.exist');
  cy.wrap(newProductInfo).as('editProduct');
};

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
  if (product.imageId) cy.get(imageSrc(product.imageId)).should('be.visible');
  cy.contains(`${product.price} Kn`).should('be.visible');
  cy.contains(product.category).should('be.visible');
  cy.contains('button', addToCartButton).should('be.visible');
};

const validateLatestOrderTable = (
  orders: { uuid: string; status: string }[]
) => {
  const latestOrdersTable = common.settingsModal.ordersTable;
  cy.get(latestOrdersTable.class).within(() => {
    common.settingsModal.ordersTable.headers.forEach((header) => {
      cy.contains(header).should('be.visible');
    });
    orders.forEach((order, index) => {
      cy.get(latestOrdersTable.rows)
        .eq(index)
        .within(() => {
          cy.contains(order.uuid).should('be.visible');
          cy.contains(order.status).should('be.visible');
          cy.get(latestOrdersTable.downloadIconClass).should('be.visible');
        });
    });
  });
};

Cypress.Commands.addAll({
  login,
  signUp,
  adminAddCustomer,
  adminEditCustomer,
  adminDeleteCustomer,
  adminAddNewProduct,
  adminEditNewProduct,
  viewProduct,
  searchProduct,
  validateProductPageDetails,
  validateCategoryProductCard,
  validateLatestOrderTable,
});
