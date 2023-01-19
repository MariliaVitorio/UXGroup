import login from "./massaDeDados.json";

describe('teste login', () => {
  beforeEach( () => { 
        cy.visit('https://www.demoblaze.com/index.html')
})
        it('verifica login válido', () => {
            cy.get('#login2.nav-link').click()
            cy.get('#logInModalLabel').should('be.visible')
            cy.get('#loginusername').type(login.valido.user)
            cy.get('#loginpassword').type(login.valido.pass)      
            cy.get('button[onclick="logIn()"]').should('contain','Log in').click({ timeout: 10000 })      
            cy.get('#nameofuser').should('contain','Welcome uxgroup')   
    })

    it('verifica login inválido', () => {
        cy.get('#login2.nav-link').click()
        cy.get('#logInModalLabel').should('be.visible')
        cy.get('#loginusername').type(login.invalido.user)
        cy.get('#loginpassword').type(login.invalido.pass)      
        cy.get('button[onclick="logIn()"]').should('contain','Log in').click({ timeout: 10000 })      
        cy.get('#logInModalLabel').should('contain','Log in') 
})

})
  