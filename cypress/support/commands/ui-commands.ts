import { loginModal, signUpModal } from '../selectors/access';
import { common } from '../selectors/common';
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

Cypress.Commands.addAll({ signUp, login });
