

class CheckoutPage {


    reviewbutton() {
    
        cy.get('[data-cy="CheckoutPage-reviewOrderButton"]').click();
    }
    
    
    placeorderbutton() {
    
        cy.get('[data-cy="CheckoutPage-placeOrderButton"]').click();
    }
    

    cardnumber() {
    
        cy.frameLoaded('iframe[id=braintree-hosted-field-number]');
        cy.iframe('iframe[id=braintree-hosted-field-number]').click().type('4444333322221111')
    }

    cardname() {

        cy.frameLoaded('iframe[id=braintree-hosted-field-cardholderName]');
        cy.iframe('iframe[id=braintree-hosted-field-cardholderName]').click().type('Tiago Nascimento');
    }
    
    cardexpiration() {

        cy.frameLoaded('iframe[id=braintree-hosted-field-expirationDate]');
        cy.iframe('iframe[id=braintree-hosted-field-expirationDate]').click().type('092028');
    }

    cvv() {
    
        cy.frameLoaded('iframe[id=braintree-hosted-field-cvv]');
        cy.iframe('iframe[id=braintree-hosted-field-cvv]').click().type('829');
        
    }

    confirmationmessage() {
    
        cy.get('[data-cy="OrderConfirmationPage-header"]').contains('Thank you for your order!')
    }
    

}
export default CheckoutPage;

