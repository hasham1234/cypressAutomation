/// <reference types="cypress"/>
import { homeCart } from "../../PageObjectModel/AddtoCard.cy"
import testData from '../../fixtures/testData.json'
const homeCartObj =new homeCart()


describe("TEST CASE",()=>{
    before(()=>{
        cy.login(testData.login.username,testData.login.password,"/opencart/index.php?route=account/login")
    })
    it("Search",()=>{
        homeCartObj.SearchProduct(testData.Product.ProductName)
        homeCartObj.ProductAddtoCard()
        // cy.wait(6000)
       // homeCartObj.VerifySuccessMessage().should('contain',testData.message.SuccessMessage).and('contain',testData.Product.SuccessMessage).should('exist').should('be.visible')
    })




})