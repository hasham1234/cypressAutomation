/// <reference types="cypress"/>


describe("TEST CASES",()=>{
    it("Iframe",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.get('#mce_0_ifr').then(function($ifame){

            let ifamebody = $ifame.contents().find('body')
            cy.wrap(ifamebody)
            .clear()
            .type("Welcome of the world of cypress")
            .type("{selectall}")
            cy.get("button[title='Bold']").click()
        })
    })
})