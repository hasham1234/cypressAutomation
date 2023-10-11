/// <reference types="cypress"/>

import { Login } from "../../PageObjectModel/PageLogin.cy"
describe("TEST CASES",()=>{
    it("Login account TESTING",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln= new Login()
        ln.SetUserName("Admin")
        ln.SetPassword("admin123")
        ln.LoginButton()
       
    })
})