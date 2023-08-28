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
      login(email: string, password: string): void;

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
    }
  }
}

export {};
