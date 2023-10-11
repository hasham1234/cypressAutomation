export class homeCart{

weblocators={
   Search_input:'.form-control',
   Search_button:'.input-group-btn > .btn > .fa',
   product:':nth-child(1) > .product-thumb',
   AdtoCard:'Add to Cart',
   Success_Message:'alert.alert-success.alert-dismissible'
}

SearchProduct(SProduct){
    cy.get(this.weblocators.Search_input).type(SProduct)
    cy.get(this.weblocators.Search_button).type(SProduct)
}

ProductAddtoCard(){
    cy.contains('button',this.weblocators.AdtoCard).first().click()

}


VerifySuccessMessage(){
    return cy.get(this.weblocators.Success_Message)
}

}