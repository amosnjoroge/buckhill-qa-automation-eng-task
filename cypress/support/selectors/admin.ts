// Left Side Bar Navigation
export const leftSideBar = {
  dashboardHref: '[href="/dashboard"]',
  dashboardLabel: 'Dashboard',
  shipmentLocationHref: '[href="/dashboard/locations"]',
  shipmentLocationLabel: 'Shipment Location',
  customersHref: '[href="/dashboard/customers"]',
  customersLabel: 'Customers',
  productsHref: '[href="/dashboard/products"]',
  productsLabel: 'Products',
};

// Customer Page
export const customerPage = {
  addNewCustomerLabel: /add new customer/i,
  updateCustomerLabel: 'Update costumer',
  editCustomerLabel: 'Edit customer',
  customerListClass: '.customers__table',
  customerModalClass: '.customer-card',
  customerActionButtonClass: '.customers__action-btn',
};

// Product Page
export const productPage = {
  addNewProductLabel: /add new product/i,
  productModalClass: '.product-card',
  productActionButtonClass: '.products__action-btn',
  productModalImageInputId: '#product-card__image-input',
  productModalRemoveImageButtonLabel: /remove image/i,
  productModalBrandSelectLabel: 'Brand name',
  productModalNameInputLabel: 'Product name',
  productModalCategorySelectLabel: 'Category',
  productModalPriceInputLabel: 'Price',
  productModalDescriptionTextAreaLabel: 'Description',
  productModalSaveButton: 'save changes',
  productsListClass: '.products__table',
  productsListProductImageClass: '.products__table-image',
};
