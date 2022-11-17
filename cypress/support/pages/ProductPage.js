class ProductPage {


    lattercolorbutton() {
    
        cy.get('[title="Latte"]').click();
    }
    
    
    lsizebutton() {
    
        cy.get('[title="L"]').click();
    }
    
    addbutton() {
    
        cy.get('.productFullDetail-actButton-2Gz').click();
    }

}
export default ProductPage;