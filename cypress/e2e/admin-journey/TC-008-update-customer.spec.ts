import { leftSideBar } from '../../support/selectors/admin';
import { common } from '../../support/selectors/common';
import { buildUser } from '../../support/utils/test-data';

const { customersHref, customersLabel } = leftSideBar;

describe('Admin Customer Edit', () => {
  it('TC-008: An admin user wants to update a new customer user account.', () => {
    const newUserInfo = buildUser();
    cy.apiSignUp().then((user) => {
      cy.login({ admin: true });
      cy.get(customersHref).should('contain.text', customersLabel).click();
      cy.adminEditCustomer(user.email, newUserInfo);
    });
    cy.login({ email: newUserInfo.email, password: newUserInfo.password });
    cy.get(common.navigationBar.avatarAriaLabel).click();
    cy.contains(`${newUserInfo.first_name} ${newUserInfo.last_name}`).should(
      'be.visible'
    );
  });
});
