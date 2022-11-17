
class HomePage {


    addtocartbutton() {
    
        cy.get('.slick-current > :nth-child(1) > [data-cy="GalleryItem-root"] > .item-actionsContainer-2rd > [data-cy="AddToCartButton-buttonInStock"]').click();
    }
    

    minicart() {

            cy.wait(1000)
            cy.get('[data-cy="CartTrigger-trigger"]').click();
        
    }
    

}
export default HomePage;



