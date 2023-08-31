import { faker } from '@faker-js/faker';
import { Product } from '../../support';

describe('Viewing Product Details', () => {
  it(`TC-002: Viewing the detailed information page of a specific product in the Pet Shop application.`, () => {
    cy.visit('/');

    cy.wait('@productsRequest').then(({ response: { body } }) => {
      const products: Product[] = body.data;
      const testProductToView = faker.helpers.arrayElement(products).title;
      cy.viewProduct(testProductToView);
    });
  });
});
