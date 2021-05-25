// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:5000')
    cy.contains('h2', 'Wilkommen beim FHNW Chat für Studierende und Dozenten')
  })

   it("login and logout with user david.test@gmail.com", () => {
    cy.visit('http://localhost:5000')
    cy.get('#login').click();
    cy.get('#email').type('david.test@gmail.com');
    cy.get('#password').type('david.test@gmail.com');
    cy.get('#login').click();
    cy.get('#logout').click()
    cy.url().should('eq', 'http://localhost:5000/login') 
  })

  it("send message in admin room", () => {
    cy.visit('http://localhost:5000')
    cy.get('#login').click();
    cy.get('#email').type('david.test@gmail.com');
    cy.get('#password').type('david.test@gmail.com');
    cy.get('#login').click();
    cy.get('#joinBtn').click()
    cy.get('#msg-field').type("this is an example message").type('{enter}')
  })  

  it("add and delete room => Lorem ipsum", () => {
    cy.visit('http://localhost:5000')
    cy.get('#login').click();
    cy.get('#email').type('david.test@gmail.com');
    cy.get('#password').type('david.test@gmail.com');
    cy.get('#login').click();
    cy.get('#addRoom').click()
    cy.get('#chat-name').type("Lorem ipsum")
    cy.get('#room-type').click({ force: true }).type('{downarrow}{enter}', {force: true})
    cy.get('#add-new-room').click()
    cy.get(':nth-child(4) > [data-v-663388cc=""] > :nth-child(1) > :nth-child(1) > .container > .row > .col > .ml-2').click()
    cy.get('.error--text > .v-btn__content').click()
  })

})
