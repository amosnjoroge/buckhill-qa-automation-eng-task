import { faker } from '@faker-js/faker';
import { User } from '..';

/**
 * A function to build a test user object.
 *
 * @param overrides - User object that overrides the default values.
 * @returns user - A test user object.
 */
export const buildUser = (overrides?: User): User => {
  const user = {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    phone_number: faker.phone.number('+###-###-###-###'),
    address: faker.location.streetAddress(),
    password: faker.internet.password(),
    is_marketing: faker.datatype.boolean(),
    ...overrides,
  };
  return user;
};
