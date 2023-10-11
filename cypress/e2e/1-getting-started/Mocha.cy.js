/// <reference types="cypress"/>


describe("TEST CASES",()=>{
    it("MOCHA ASSERTION",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should("include","/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.get('.oxd-text--h5').should('have.text','Login')
        cy.get('.oxd-sheet > :nth-child(1)').should('include.text','Username : Admin')
        cy.get('.oxd-sheet > :nth-child(2)').should('include.text','Password : admin123')
        cy.get('.oxd-text--h5').should('not.contain','Logut')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.enabled').and('not.be.disabled')
        cy.get('.oxd-button').should('have.css','background-color','rgb(255, 123, 29)')
    })
})