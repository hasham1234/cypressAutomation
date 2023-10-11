/// <reference types="cypress"/>

describe("SOMKE TESTING", ()=>{

    before(function()
    {
        cy.visit("https://www.saucedemo.com/v1/")
    })

    beforeEach(function()
    {
        cy.get("#user-name").type('standard_user')
        cy.get("#password").type('secret_sauce')
        cy.get("#login-button").click()
    })

    it("click the item",()=>{
        cy.get("a[id='item_4_title_link'] div[class='inventory_item_name']").click()
    })
    it("ADD to Card",()=>{
        cy.get(".btn_primary.btn_inventory").click()
        // cy.get(".inventory_details_back_button").click()
    })

    afterEach(function(){
        cy.contains('.bm-burger-button > button').click()
        cy.get("#logout_sidebar_link").click()
    })


    // it("test",()=>{
    //     cy.visit("https://www.saucedemo.com/v1/index.html")
    //     cy.get("#user-name").type('standard_user')
    //     cy.get("#password").type('secret_sauce')
    //     cy.get("#login-button").click()
    
    // })

   

   

})