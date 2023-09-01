import './commands/ui-commands';
import './commands/api-commands';

beforeEach(() => {
  cy.intercept('GET', '/api/v1/categories').as('allCategoriesRequest');
  cy.intercept('GET', '/api/v1/categories?page=*').as('categoriesRequest');
  cy.intercept('GET', '/api/v1/products?category=*').as('productsRequest');
  cy.intercept('GET', '/api/v1/product/*').as('productRequest');
  cy.intercept('GET', '/api/v1/products?title=*').as('searchRequest');
  cy.intercept('GET', '/api/v1/user/orders?page=*').as('userOrdersRequest');
});
