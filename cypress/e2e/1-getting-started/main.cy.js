/// <reference types="cypress"/>
import { navbarr } from "../../PageObjectModel/navbar.cy"
const chairrr = new navbarr()
describe("TEST CASES",()=>{
    it("shopist",()=>{
      chairrr.OpenURL()
    //   chairrr.chair()
    //   chairrr.chairrclick()
    //   chairrr.Addorder()

         chairrr.dropdown_menu()
         chairrr.slectitem()
         chairrr.selectpicture()
         chairrr.Additem()
         chairrr.dpdwn_menu()
         chairrr.select_card()
         chairrr.select_checkout()

    })
})