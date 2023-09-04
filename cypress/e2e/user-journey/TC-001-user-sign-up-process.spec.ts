import { common } from '../../support/selectors/common';

describe('User Sign-Up Process', () => {
  it('TC-001: User registration to create a new account in the Pet Shop application.', () => {
    cy.visit('/');
    cy.signUp().then(({ email, password, first_name, last_name }) => {
      cy.login({ email, password });
      cy.get(common.navigationBar.avatarAriaLabel).click();
      cy.contains(`${first_name} ${last_name}`).should('be.visible');
    });
  });
});
