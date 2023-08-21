const url = 'http://localhost:5173'

describe('Responsive Design Test', () => {

  beforeEach(() => {
    cy.visit(url);  // make sure to change this to the correct path of your webpage
  });

  context('Desktop view', () => {

    beforeEach(() => {
      cy.viewport(1280, 720);  // typical desktop viewport size
    });

    it('Should render menu items correctly', () => {
      cy.get('.menu-item').should('have.length', 13); // checks if all 13 menu items are rendered
    });

    it('Should render navbar with all navigation links and search input', () => {
      cy.get('.navbar').should('be.visible');
      cy.get('.nav-link').should('have.length', 5);
      cy.get('#search-input').should('be.visible');
    });

  });

  context('Mobile view', () => {

    beforeEach(() => {
      cy.viewport(375, 667);  // typical mobile viewport size for iPhone 6/7/8
    });

    it('Should render menu items correctly', () => {
      cy.get('.menu-item').should('have.length', 13);  // checks if all 13 menu items are rendered
    });

    it('Should show navbar toggler and hide navigation links and search input by default', () => {
      cy.get('.navbar-toggler').should('be.visible');
      cy.get('.nav-link').should('not.be.visible');
      cy.get('#search-input').should('not.be.visible');
    });

    it('Should display navigation links and search input when navbar toggler is clicked', () => {
      cy.get('.navbar-toggler').click();
      cy.get('.nav-link').should('be.visible');
      cy.get('#search-input').should('be.visible');
    });

  });

});


