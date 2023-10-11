/// <reference types="cypress" />


describe("TEST CASES",()=>{
    it("LOGIN",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',{timeout: 10000}).type('Admin')
        cy.get('input[name="username"]',{timeout:7000}).type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()


        cy.get(':nth-child(3) > .oxd-main-menu-item').click()

        cy.get('.oxd-topbar-body-nav > ul').contains('Apply').click()

    })
})