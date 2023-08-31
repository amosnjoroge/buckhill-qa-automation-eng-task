describe('Products Search', () => {
  it(`TC-002: Search products by product's title`, () => {
    const testProductToView = 'Royal Canin Small Breed Adult Dry Dog Food';
    const keywordToSearch = 'Dog Food';
    cy.visit('/');
    cy.wait('@categoriesRequest');
    cy.searchProduct(keywordToSearch, testProductToView);
  });
});
