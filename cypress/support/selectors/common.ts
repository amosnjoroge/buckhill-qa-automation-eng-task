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
  // Search input field
  search: {
    label: 'Search products',
    resultsPanelClass: '.search__results',
    resultItemClass: '.text-capitalize',
  },
  // Settings modal
  settingsModal: {
    title: 'Settings',
    modalClass: '.settings',
    ordersTable: {
      title: 'Latest orders',
      headers: ['Order UUID', 'Status', 'Download Invoice'],
      class: '.orders-table',
      rows: 'tbody tr',
      downloadIconClass: '.download-icon',
    },
  },
  // User form inputs
  userForm: {
    firstNameLabel: 'First Name',
    lastNameLabel: 'Last Name',
    emailLabel: /Email/,
    emailAddressLabel: /Email Address/,
    phoneLabel: 'Phone Number',
    addressLabel: /^Address\*/,
    locationLabel: 'Location',
    passwordLabel: /Password/,
    passwordConfirmationLabel: /Confirm Password/,
  },
  // Common elements
  editIconClass: '.mdi-pencil',
  deleteIconClass: '.mdi-delete',
  deleteButtonLabel: 'DELETE',
  deleteConfirmMessage: (name: string) =>
    `Are you sure you want to delete ${name}`,
};
