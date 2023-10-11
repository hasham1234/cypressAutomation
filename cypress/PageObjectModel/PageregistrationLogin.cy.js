export class PageRegister{

weblocators={

    firstName:'#input-firstname',
    lastName:'#input-lastname',
    EmailId:'#input-email',
    Telephone:'#input-telephone',
    Password:'#input-password',
    ConfPassword:'#input-confirm',
    Policycheckbox:'input[type="checkbox"]',
    continue:'.pull-right > .btn'
    
}

OpenURL(){
    cy.visit(Cypress.env('URL'))
}

EnterFirstName(FName){
     cy.get(this.weblocators.firstName).type(FName)
}

EnterLastName(LName){
    cy.get(this.weblocators.lastName).type(LName)
}

EnterEmailId(ID){
    cy.get(this.weblocators.EmailId).type(ID)
}

EnterTelephone(phone){
    cy.get(this.weblocators.Telephone).type(phone)
}

EnterPassword(pass){
    cy.get(this.weblocators.Password).type(pass)
    cy.get(this.weblocators.ConfPassword).type(pass)
}

// EnterConfPassword(Confirmed){
//     cy.get(this.weblocators.ConfPassword).type(Confirmed)
// }

EnterPolicy(){
    cy.get(this.weblocators.Policycheckbox).check()
}

EnterContinue(){
    cy.get(this.weblocators.continue).click()
}

}