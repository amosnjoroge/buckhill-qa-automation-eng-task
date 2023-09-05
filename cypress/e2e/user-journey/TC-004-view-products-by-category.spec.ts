import { faker } from '@faker-js/faker';
import { Category, Product } from '../../support';
import { productCardClass } from '../../support/selectors/shop';

describe('Viewing Products by Product Category', () => {
  it(`TC-004: Viewing the detailed information page of a specific product in the Pet Shop application.`, () => {
    cy.visit('/');

    cy.wait('@categoriesRequest').then(({ response: { body } }) => {
      const [firstCategory]: Category[] = body.data;
      cy.contains(firstCategory.title).click();

      cy.wait('@allCategoriesRequest');
      cy.wait('@productsRequest').then(({ response: { body } }) => {
        const products: Product[] = body.data.map((product) => ({
          uuid: product.uuid,
          title: product.title,
          price: product.price,
          description: product.description,
          imageId: product.metadata.image,
          category: product.category.title,
        }));
        cy.contains(firstCategory.title).should('be.visible');

        cy.get(productCardClass).each(($productCard, index) => {
          cy.validateCategoryProductCard(products[index]);
        });
      });
    });
  });
});
