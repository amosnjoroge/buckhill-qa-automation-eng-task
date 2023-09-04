import * as qs from 'qs';

import { PaymentType, Product } from '..';
import { buildCreditCard, buildUser } from '../utils/test-data';

const apiSignUp = ({ user = buildUser() } = {}) => {
  cy.request({
    method: 'POST',
    url: '/api/v1/user/create',
    body: { ...user, password_confirmation: user.password },
  }).then((response) => {
    cy.wrap(response.isOkStatusCode).should('eq', true);

    apiLogin(user.email, user.password);
    cy.wrap(user, { log: false }).as('newApiTestUser');
  });
};

const apiLogin = (email: string, password: string) => {
  cy.request({
    method: 'POST',
    url: '/api/v1/user/login',
    body: { email, password },
  }).then((response) => {
    cy.wrap(response.isOkStatusCode).should('eq', true);

    const bearerToken: string = response.body.data.token;
    const decodedBearerTokenPayload: {
      iss: string;
      exp: number;
      user_uuid: string;
    } = JSON.parse(atob(bearerToken.split('.')[1]));

    const token = {
      token: bearerToken,
      ttl: decodedBearerTokenPayload.exp + 36000,
    };

    localStorage.setItem('token', JSON.stringify(token));
    cy.wrap(token, { log: false }).as('token');
  });
};

const apiPlaceOrder = (
  productsInCart: Product[],
  address: { shipping: string; billing: string },
  paymentType: PaymentType
) => {
  let paymentDetails;
  switch (paymentType) {
    case 'credit_card':
      paymentDetails = buildCreditCard();
      break;
  }
  cy.request({
    method: 'POST',
    url: '/api/v1/payment/create',
    headers: { Authorization: `Bearer ${globalThis.accessToken}` },
    body: { type: paymentType, details: paymentDetails },
  }).then((response) => {
    const paymentUuid = response.body.data.uuid;
    cy.wrap(response.isOkStatusCode).should('eq', true);
    cy.request({
      url: '/api/v1/order-statuses',
      headers: { Authorization: `Bearer ${globalThis.accessToken}` },
    }).then((response) => {
      const openOrderStatusUuid = response.body.data.find(
        (orderStatus) => orderStatus.title === 'open'
      ).uuid;
      const products = productsInCart.map((product) =>
        JSON.stringify({
          uuid: product.uuid,
          quantity: product.quantity,
        })
      );

      cy.request({
        method: 'POST',
        url: '/api/v1/order/create',
        headers: { Authorization: `Bearer ${globalThis.accessToken}` },
        form: true,
        body: qs.stringify({
          order_status_uuid: openOrderStatusUuid,
          payment_uuid: paymentUuid,
          products: products.join(),
          address: JSON.stringify(address),
        }),
      }).then((response) => {
        cy.wrap(response.isOkStatusCode).should('eq', true);
        cy.wrap(response.body.data.uuid, { log: false }).as('newOrderUuid');
      });
    });
  });
};

Cypress.Commands.addAll({ apiSignUp, apiLogin, apiPlaceOrder });
