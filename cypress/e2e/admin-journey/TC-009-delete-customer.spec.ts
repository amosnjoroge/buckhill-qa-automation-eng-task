import { leftSideBar } from '../../support/selectors/admin';

const { customersHref, customersLabel } = leftSideBar;

describe('Admin Customer Edit', () => {
  it('TC-007: An admin user wants to update a new customer user account.', () => {
    cy.apiSignUp().then((user) => {
      cy.login({ admin: true });
      cy.get(customersHref).should('contain.text', customersLabel).click();
      cy.adminDeleteCustomer(
        user.email,
        `${user.first_name} ${user.last_name}`
      );
    });
  });
});
