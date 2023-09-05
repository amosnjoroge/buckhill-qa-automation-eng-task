import { Product, User } from '../../support';
import { common } from '../../support/selectors/common';

describe('Viewing Users Orders', () => {
  it('TC-006: A registered user wants to view their latest orders categorised by their status.', () => {
    cy.apiSignUp().then((user: User) => {
      cy.visit('/');
      cy.wait('@productsRequest').then(({ response }) => {
        const products: Product[] = response.body.data;
        const product = products[Math.floor(Math.random() * products.length)];
        product.quantity = 1;
        const address = { shipping: user.address, billing: user.address };

        cy.apiPlaceOrder([product], address, 'credit_card').then(
          (newOrderUuid) => {
            cy.get(common.navigationBar.avatarAriaLabel).click();

            cy.wait('@userOrdersRequest');
            cy.validateLatestOrderTable([
              { uuid: newOrderUuid, status: 'open' },
            ]);
          }
        );
      });
    });
  });
});
