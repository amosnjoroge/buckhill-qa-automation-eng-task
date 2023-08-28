import { buildUser } from '../utils/test-data';

const apiSignUp = ({ user = buildUser(), persistUser = false } = {}) => {
  cy.request({
    method: 'POST',
    url: '/api/v1/user/create',
    body: { ...user, password_confirmation: user.password },
  }).then((response) => {
    cy.wrap(response.isOkStatusCode).should('eq', true);
    cy.wrap(response.body.data.token, { log: false }).as('accessToken');
    cy.wrap(user, { log: false }).as('newApiTestUser');

    if (persistUser) {
      Cypress.env('ACCESS_TOKEN', response.body.data.token);
      Cypress.env('GLOBAL_TEST_USER', user);
    }
  });
};

Cypress.Commands.addAll({ apiSignUp });
