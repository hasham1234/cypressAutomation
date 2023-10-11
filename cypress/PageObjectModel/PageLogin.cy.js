export class Login{

    SetUserName(username){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)

    }
    SetPassword(password){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    }
    LoginButton(){
        cy.get('.oxd-button').click()
    }

}

