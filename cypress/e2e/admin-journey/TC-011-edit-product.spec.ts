import { faker } from '@faker-js/faker';
import { leftSideBar } from '../../support/selectors/admin';
import { buildProduct } from '../../support/utils/test-data';
import { Product } from '../../support';
import { imageSrc } from '../../support/selectors/product';

const { productsHref, productsLabel } = leftSideBar;

describe('Admin Product Edit', () => {
  it('TC-011: An admin user wants to edit a new product.', () => {
    const product = buildProduct();
    const newProductInfo = {
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      imageFile: 'test-image.jpg',
    };
    cy.login({ admin: true });
    cy.apiAddProduct(product);
    cy.get(productsHref).should('contain.text', productsLabel).click();
    cy.adminEditNewProduct(product.title, newProductInfo);
    cy.contains(newProductInfo.title).should('be.visible');
    cy.get('@editProduct').then((editedProduct) => {
      const { imageId, title, description } =
        editedProduct as unknown as Product;
      cy.get(imageSrc(imageId)).should('be.visible');
      cy.visit(`/products/${product.uuid}`);
      cy.contains(newProductInfo.title).should('be.visible');
      cy.contains(newProductInfo.description).should('be.visible');
      cy.get(imageSrc(imageId)).should('be.visible');
    });
  });
});
