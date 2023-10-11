

export class navbarr{
    weblocators={
    //  chair_navbar:"div[class='departments'] div:nth-child(1) a:nth-child(1)",
    //  chair_click:":nth-child(1) > :nth-child(1) > a > .product-card > img",
    //  AddtoCard:".purchase-button"

    dropdown:".hamburger",
    select:'[href="/department/chairs"] > .menu-item-small',
    select_chair:':nth-child(1) > :nth-child(1) > a > .product-card > img',
    AddtoCard:'.purchase-button',
    dpdwn:".hamburger",
    Card:'[href="/cart"] > .menu-item-small',
    check:'.checkout'

     
    }

    OpenURL(){
        cy.visit(Cypress.env('URL'))
    }

    // chair(){
    //     cy.get(this.weblocators.chair_navbar).click()
    // }
    // chairrclick(){
    //     cy.get(this.weblocators.chair_click).click()
    // }
    // Addorder(){
    //     cy.get(this.weblocators.AddtoCard).click()
    // }


    dropdown_menu(){
        cy.get(this.weblocators.dropdown).click()
    }

    slectitem(){
        cy.get(this.weblocators.select).click()
    }

    selectpicture(){
        cy.get(this.weblocators.select_chair).click()
    }

    Additem(){
        cy.get(this.weblocators.AddtoCard).click()
    }

    dpdwn_menu(){
        cy.get(this.weblocators.dpdwn).click()
    }

    select_card(){
        cy.get(this.weblocators.Card).click()
    }
    
    select_checkout(){
        cy.get(this.weblocators.check).click()
    }

}