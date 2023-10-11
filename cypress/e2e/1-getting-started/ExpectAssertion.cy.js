/// <reference types="cypress"/>


describe("BBD EXPECT ASSERTION",()=>{
   it("TEST CASES",()=>{
     cy.visit("www.google.com")

   let PageNumber = "Google HomePage"
   expect(PageNumber).to.not.equal("Google")
   expect(PageNumber).to.be.equal("Google HomePage")
   expect(PageNumber).to.be.a('string')
   expect(PageNumber).to.have.length.of.at.most(15)

   // validating Object

   let person = { firstname : "hasham" , testing : "cypress" };
   expect(person).to.deep.equal({ firstname : "hasham" , testing : "cypress" })
   expect(person).to.have.property('testing','cypress')

   // validating array

   let EmpID =[1,2,3,4,5]
   expect(EmpID).to.have.ordered.members([1,2,3,4,5])
   expect(EmpID).to.include(2)
   expect(EmpID).to.include.members([3,5])
   expect(EmpID).to.include.members([3,6])













   })
})