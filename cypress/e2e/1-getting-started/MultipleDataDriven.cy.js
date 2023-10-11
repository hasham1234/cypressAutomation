/// <reference types="cypress"/>

describe("TEST CASES", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    let userdata;
    it("data driven testings", () => {
        cy.fixture('example').then((data) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            data.forEach((userdata) => {
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
                cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
                cy.get('.oxd-button').click()

                if (userdata.username == 'Admin' && userdata.password == 'admin') {
                    cy.title().should('eq', 'OrangeHRM')
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }

                // else {
                //     cy.get('.oxd-alert-content > .oxd-text').should('have.text','Invalid credentials')
                // }








            })









        })
    })
})

