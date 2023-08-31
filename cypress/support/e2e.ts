// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands/ui-commands';
import './commands/api-commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// before(() => {
//   cy.apiSignUp({ persistUser: true });
// });
beforeEach(() => {
  cy.intercept('GET', '/api/v1/categories?page=*').as('categoriesRequest');
  cy.intercept('GET', '/api/v1/products?category=*').as('productsRequest');
  cy.intercept('GET', '/api/v1/product/*').as('productRequest');
  cy.intercept('GET', '/api/v1/products?title=*').as('searchRequest');
});
