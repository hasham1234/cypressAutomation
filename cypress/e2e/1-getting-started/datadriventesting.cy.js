/// <reference types="cypress"/>

describe("TEST CASES",()=>{
    let loginData;
    before(function(){
        cy.fixture('example').then((Data)=>{
            loginData=Data
        })
    })
 it("DATA DRIVEN TESTING",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(loginData.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(loginData.password)
        cy.get('.oxd-button').click()
    })
    
})