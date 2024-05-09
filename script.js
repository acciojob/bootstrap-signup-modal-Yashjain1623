//your JS code here. If required.
cy.get('.modal').should('be.visible').within(() => {
  cy.get('.btn-close').click();
});