
import LoginElements from '../elements/loginElements';

class LoginPage {

opensigninform() {
    
    cy.get('button[aria-label="Toggle My Account Menu"]').click();
}

fillemailfield() {
    
    cy.get('.signIn-form-nPj > .field-root-ffA > .fieldIcons-root-Gff > .fieldIcons-input-1wB > #email').type('tiago.nascimento@webjump.com.br');
}

fillpasswordfieldw() {
    cy.get('#Password').type('kajskhasj'); 
    
}


fillloginform() {
    cy.get('.signIn-form-nPj > .field-root-ffA > .fieldIcons-root-Gff > .fieldIcons-input-1wB > #email').type('tiago.nascimento@webjump.com.br');
    cy.get('#Password').type('Webjump@1402');
    
}


clicksignin() {
    cy.get('[data-cy="SignInButton-root_highPriority"] > .button-content-3wD').click();
    
}



confirm() {
    
    cy.get('.accountTrigger-trigger-23q > .accountChip-root-1l4 > :nth-child(2)').contains('Hi');

}

invalidloginmessage() {
    
    cy.get('[data-cy="ErrorMessage-errorMessage"]').should('be.visible')


}



}

export default LoginPage;