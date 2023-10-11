/// <reference types="cypress"/>

describe("TEST CASES",()=>{
    it("ALERT HANDLING",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(1) > button').click()
        cy.on('window:alert',(alertText)=>{
            expect(alertText).to.contains('I am a JS Alert')
        })
    })

//    it("Confirm alert",()=>{
       
//         cy.get(':nth-child(2) > button').click()
//         cy.on('window:confirm'),(AcceptConfirm)=>{
//             expect(AcceptConfirm).to.contains('I am a JS Confirm')
//         }
//     })


    // it("Cancel alert",()=>{
    //     cy.on('window:confirm'),(cancelpopup)=>{
    //         return false;
    //         cy.get(':nth-child(2) > button')
    //         cy.get('#result').should('have.text','You clicked: Cancel')
    //     }
    // })

    it("prompt alert",()=>{
        cy.window().then(function(PromptAlert){

            // stubs prompt
            cy.stub(PromptAlert,"prompt").returns("testing cypress")
            cy.get("button[onclick='jsPrompt()']").click()

            cy.get('#result').contains('testing cypress')

        })
    })


})