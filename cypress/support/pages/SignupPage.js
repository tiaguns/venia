

class SignupPage {

    go() {

        cy.visit('https://develop.pwa-venia.com/');
        cy.get('[data-cy="AccountTrigger-trigger"] > .accountChip-root-1l4').click();
        cy.contains('Create an Account').should('be.visible').click();
        

    }

    gosign() {

        cy.visit('https://develop.pwa-venia.com/');
        cy.get('[data-cy="AccountTrigger-trigger"] > .accountChip-root-1l4').click()
        
    }

    gotosignup(){
        cy.get('[data-cy="AccountTrigger-trigger"] > .accountChip-root-1l4').click();
    }
    

    fillForm(user) {

    cy.get('input[id="firstName"]').type(user.name);
    cy.get('input[id="lastName"]').type(user.last_name);
    cy.get('input[id="Email"]').type(user.email);
    cy.get('input[id="Password"]').type('venia@2344VWN$');
    }

    submit(){



        cy.get('.createAccount-submitButton-3OJ > .button-content-3wD').click();

    }

    confirmaccount(){
        
        cy.get('.accountTrigger-trigger-23q > .accountChip-root-1l4 > :nth-child(2)').contains(user.name);

    }

    singout(){

        cy.get('.accountMenuItems-signOut-3Pz').should('be.visible').click();
        cy.wait(1000);


    }


}

export default SignupPage;

