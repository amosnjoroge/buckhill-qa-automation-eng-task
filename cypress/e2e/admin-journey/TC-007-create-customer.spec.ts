import { customerPage, leftSideBar } from '../../support/selectors/admin';
import { common } from '../../support/selectors/common';

const { customersHref, customersLabel } = leftSideBar;

describe('Admin Customer Creation', () => {
  /**
   * Test expected to fail due to a bug in the application: https://github.com/amosnjoroge/buckhill-qa-automation-eng-task/issues/22
   */
  it('TC-007: An admin user wants to create a new customer user account.', () => {
    cy.login({ admin: true });
    cy.get(customersHref).should('contain.text', customersLabel).click();
    cy.adminAddCustomer().then((user) => {
      const fullName = `${user.first_name} ${user.last_name}`;
      cy.realPress('Escape');
      cy.get(customerPage.customerListClass).within(() => {
        cy.contains(fullName).should('be.visible');
        cy.contains(user.email).should('be.visible');
        cy.contains(user.phone_number).should('be.visible');
        cy.contains(user.address).should('be.visible');
      });

      cy.contains('button', common.navigationBar.logoutButton).click();
      cy.login({ email: user.email, password: user.password });
      cy.get(common.navigationBar.avatarAriaLabel).click();
      cy.contains(fullName).should('be.visible');
    });
  });
});
