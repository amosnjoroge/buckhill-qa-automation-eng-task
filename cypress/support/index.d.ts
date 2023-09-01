export interface User {
  first_name?: string;
  last_name?: string;
  email: string;
  phone_number?: string;
  address?: string;
  avatar?: string;
  password?: string;
  password_confirmation?: string;
  is_marketing?: boolean;
}

export interface Product {
  uuid?: string;
  title: string;
  price: number;
  description: string;
  imageId?: string;
  category: string;
  quantity?: number;
  brand?: string;
}

export interface Category {
  uuid?: string;
  title: string;
  slug: string;
}

export interface Card {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export type PaymentType = 'credit_card' | 'cash_on_delivery' | 'bank_transfer';

declare global {
  namespace Cypress {
    interface Chainable {
      // UI COMMANDS
      /**
       * Custom command to register a new user.
       * @param user User object
       *
       * @example
       * cy.signUp() // register a new user with random data
       * cy.signUp({
       *   email: 'john_doe@example.com',
       *   password: 'test1234',
       *   password_confirmation: 'test1234',
       *   first_name: 'John',
       *   last_name: 'Doe',
       *   phone: '+1234567890',
       *   address: 'First Street 1, 10000 Zagreb, Croatia',
       *   is_marketing: true
       * })
       */
      signUp(user?: User): Chainable<User>;

      /**
       * Custom command to login a user
       *
       * @param email user email
       * @param password user password
       *
       * @example
       * cy.login('test@example.com', 'test1234')
       */
      login(email: string, password: string, admin?: boolean): void;

      /**
       * Custom command to via a product
       * @param product Product title
       * @example
       * cy.viewProduct('Dog Food')
       */
      viewProduct(productTitle: string): void;

      /**
       * Custom command search for a product
       * @param keyword Keyword to search for
       * @param productToView Product title to view
       * @example
       * cy.searchProduct('dog', 'Dog Food') // search for dog and view Dog Food product
       * cy.searchProduct('dog') // search for dog and only validate the results
       */
      searchProduct(keyword: string, productToView?: string): void;

      /**
       * Custom command validate the product details page
       * @param product Product object
       * @example
       * cy.validateProductPageDetails({
       *  title: 'Product Title',
       *  description: 'Product Description',
       *  price: 100,
       *  category: 'Product Category',
       *  brand: 'Product Brand',
       *  imageId: '09458a55-e21c-3a30-94a5-54154f0b9717'
       * })
       */
      validateProductPageDetails(product: Product): void;

      /**
       * Custom command validate the product card
       * @param product Product object
       * @example
       * cy.validateCategoryProductCard({
       *  title: 'Product Title',
       *  price: 100,
       *  category: 'Product Category',
       *  brand: 'Product Brand',
       *  imageId: '09458a55-e21c-3a30-94a5-54154f0b9717'
       * })
       */
      validateCategoryProductCard(product: Product): void;

      /**
       * Custom command validate the latest order table
       * @param orders Array of orders
       * @example
       * cy.validateLatestOrderTable([
       *  { uuid: 'a6321a0c-9b10-3382-9c7c-dafc50161c8c', status: 'open' },
       *  { uuid: '09458a55-e21c-3a30-94a5-54154f0b9717', status: 'shipped' }
       * ])
       */
      validateLatestOrderTable(
        orders: { uuid: string; status: string }[]
      ): void;

      // API COMMANDS
      /**
       * Custom command to register a new user via the api.
       * @param user User object
       * @returns User object
       * @example
       * cy.apiSignUp() // register a new user with random data
       * cy.apiSignUp({ persistUser: true }) // register a new user with random data and persist it
       * cy.apiSignUp({
       *  user: {
       *   email: 'john_doe@example.com',
       *   password: 'test1234',
       *   password_confirmation: 'test1234',
       *   first_name: 'John',
       *   last_name: 'Doe',
       *   phone: '+1234567890',
       *   address: 'First Street 1, 10000 Zagreb, Croatia',
       *   is_marketing: true
       *  },
       *  persistUser: true
       * })
       */
      apiSignUp({
        user,
        persistUser,
      }?: {
        user?: User;
        persistUser: boolean;
      }): Chainable<User>;

      /**
       * Custom command to login a user via the api
       *
       * @param email user email
       * @param password user password
       *
       * @example
       * cy.apiLogin('test@test.com', 'userpassword')
       */
      apiLogin(
        email: string,
        password: string
      ): Chainable<{ token: string; ttl: string }>;

      /**
       * Custom command to place an order via the api
       * @param productsInCart Array of products in cart
       * @param address Object with shipping and billing address
       * @param paymentType Payment type
       */
      apiPlaceOrder(
        productsInCart: Product[],
        address: { shipping: string; billing: string },
        paymentType: PaymentType
      ): Chainable<string>;
    }
  }
}

export {};
