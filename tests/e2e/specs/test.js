// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:5000')
    cy.contains('h2', 'Wilkommen beim FHNW Chat für Studierende und Dozenten')
  })

  it("login with user david.test@gmail.com", () => {
    cy.visit('http://localhost:5000')
    cy.get('#login').click();
    cy.get('#email').type('david.test@gmail.com');
    cy.get('#password').type('david.test@gmail.com');
    cy.get('#login').click();
    cy.get('#joinBtn').click()
    cy.get('#msg-field').type("this is an example message").type('{enter}')
    cy.get('#back-to-dashboard').click()
    cy.get('#logout').click()
    cy.url().should('eq', 'http://localhost:5000/login') 

  
  })
  
})
