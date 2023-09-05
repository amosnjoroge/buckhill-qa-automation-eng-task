import { faker } from '@faker-js/faker';
import { Product, User, Card } from '..';

/**
 * A function to build a test user object.
 *
 * @param overrides - User object that overrides the default values.
 * @returns user - A test user object.
 * @example
 * const user = buildUser();
 * const user = buildUser({ first_name: 'Test' });
 */
export const buildUser = (overrides?: Partial<Product>): User => {
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

/**
 * A function to build a test product object.
 * @param overrides - Product object that overrides the default values.
 * @returns product - A test product object.
 * @example
 * const product = buildProduct();
 * const product = buildProduct({ title: 'Test Product' });
 */
export const buildProduct = (overrides?: Partial<Product>): Product => {
  return {
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    category: faker.helpers.arrayElement([
      'cat litter',
      'pet oral care',
      'dry dog food',
    ]),
    brand: faker.helpers.arrayElement(['blue', 'hills', 'acana']),
    imageFile: 'test-image.jpg',
    ...overrides,
  };
};

/**
 * A function to build a test payment credit card object.
 * @param overrides - Payment card object that overrides the default values.
 * @returns creditCard - A test payment credit card object.
 * @example
 * const creditCard = buildCreditCard();
 * const creditCard = buildCreditCard({ cardNumber: '1234123412341234' });
 */
export const buildCreditCard = (overrides?: Partial<Card>): Card => {
  const futureDate = faker.date.future();
  const month = futureDate.getMonth() + 1;
  const MM = month < 10 ? `0${month}` : month;
  const YY = futureDate.getFullYear().toString().slice(-2);
  return {
    cardNumber: faker.finance.creditCardNumber(),
    expiryDate: `${MM}/${YY}}`,
    cvv: faker.finance.creditCardCVV(),
    ...overrides,
  };
};
