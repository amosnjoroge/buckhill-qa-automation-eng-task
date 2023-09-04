import 'cypress-real-events';

import './commands/ui-commands';
import './commands/api-commands';

beforeEach(() => {
  cy.intercept('POST', '/api/v1/user/login').as('userLoginRequest');
  cy.intercept('POST', '/api/v1/admin/login').as('adminLoginRequest');
  cy.intercept('GET', '/api/v1/categories').as('allCategoriesRequest');
  cy.intercept('GET', '/api/v1/categories?page=*').as('categoriesRequest');
  cy.intercept('GET', '/api/v1/products?category=*').as('productsRequest');
  cy.intercept('GET', '/api/v1/product/*').as('productRequest');
  cy.intercept('GET', '/api/v1/products?title=*').as('searchRequest');
  cy.intercept('GET', '/api/v1/user/orders?page=*').as('userOrdersRequest');
});

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Error: Container is not defined')) return false;
});
