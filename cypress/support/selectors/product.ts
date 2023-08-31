export const addToCartButton = 'add to cart';
export const imageSrc = (imageId: string) =>
  `[src="${Cypress.config('baseUrl')}/api/v1/file/${imageId}"]`;
