/// <reference types="cypress"/>
import { PageRegister } from "../../PageObjectModel/PageregistrationLogin.cy";

const registPage=new PageRegister()

describe("TEST CASES",()=>{
    it.only("REGISTER PAGE",()=>{

        cy.fixture('Reg').then((data)=>{

            registPage.OpenURL()
            registPage.EnterFirstName(data.FirstName)
            registPage.EnterLastName(data.LastName)
            registPage.EnterEmailId(data.Emailid)
            registPage.EnterTelephone(data.Telephone)
            registPage.EnterPassword(data.password)
            registPage.EnterPolicy()
            registPage.EnterContinue()

        })
})

    it("REGISTER PAGE",()=>{
        registPage.OpenURL()
        registPage.EnterFirstName("Hasham")
        registPage.EnterLastName("Arshad")
        registPage.EnterEmailId("testcypress@gmail.com")
        registPage.EnterTelephone("12345677899")
        registPage.EnterPassword("Cypress123")
        registPage.EnterPolicy()
        registPage.EnterContinue()
    })  

})