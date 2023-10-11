/// <reference types="cypress"/>

describe("TEST CASES",()=>{
    it("TDD Style",()=>{

        cy.visit("https://www.google.co.uk/")

        //Asserting string
        let firstNamee= 'testingTDD'
        assert.equal(firstNamee,'testingTDD')
        assert.include(firstNamee,'testing')
        assert.typeOf(firstNamee,'string')
        assert.notTypeOf(firstNamee,'Integar')


        //Asserting Object

        let person ={
            firstNamee:'Testing',lastNamee:'funda'
        };

        assert.property(person,'lastNamee')
        assert.isObject(person)
        assert.deepPropertyVal(person,'lastNamee','funda')
        assert.deepEqual(person, {
            firstNamee:'Testing',lastNamee:'funda'
        })


        //Asserting array

        let EmpId = [1,2,3,4,5,6]

        assert.isArray(EmpId)
        assert.includeDeepMembers(EmpId,[2,4])
        assert.includeDeepOrderedMembers(EmpId,[1,2,3,4,5,6])



    })
})