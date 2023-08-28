// This are the selectors for the elements that are common to all pages.

export const common = {
  // Navigation bar
  navigationBar: {
    petShopLogo: '[alt="petshop logo"]',
    productsLink: 'PRODUCTS',
    promotionsLink: 'PROMOTIONS',
    blogLink: 'BLOG',
    cartButton: /CART\((\d+)\)/,
    loginButton: 'LOGIN',
    logoutButton: 'LOGOUT',
    avatarAriaLabel: '[aria-label="John"]',
  },
};
