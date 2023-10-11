/// <reference types="cypress"/>


describe("TEST CASES",()=>{
    it("automated select",()=>{
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get("#user-name").type('standard_user')
        cy.get("#password").type('secret_sauce')
        cy.get('[id="login-button"]').click()

        cy.get('.product_sort_container').select('Price (high to low)')
    })
})