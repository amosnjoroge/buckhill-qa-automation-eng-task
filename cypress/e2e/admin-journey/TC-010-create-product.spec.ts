import { leftSideBar } from '../../support/selectors/admin';

const { productsHref, productsLabel } = leftSideBar;

describe('Admin Product Creation', () => {
  it('TC-010: An admin user wants to add a new product.', () => {
    cy.login({ admin: true });
    cy.get(productsHref).should('contain.text', productsLabel).click();
    cy.adminAddNewProduct();
  });
});
