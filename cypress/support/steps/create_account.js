import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import signupfactory from '../factories/signupfactory'

Given('I go to venia website', () => {
cy.visit('https://develop.pwa-venia.com/');
})

When('I click on sign in button', () => {
cy.get('[data-cy="SignInButton-root_highPriority"]').click();
})

And('I click on create an account button', () => {
cy.contains('Create an Account').should('be.visible').click();
})

And('I see the account form', () => {
cy.contains('Create an Account').should('be.visible');
})

var user = signupfactory.user()
   

And ('I fill the name field', () =>{
cy.get('input[id="firstName"]').type(user.name);
})

And('I fill the last name field', () => {
    cy.get('input[id="lastName"]').type(user.last_name);
})
    
And('I fill the email field', () => {
    cy.get('input[id="Email"]').type(user.email);
})

And('I fill the password field', () => {
    cy.get('input[id="Password"]').type(user.password);
    cy.wait(1000);
})

And('I click on create button', () => {    
    cy.get('.createAccount-submitButton-3OJ > .button-content-3wD').click();     
})

And('I see the user name', () => {
    cy.get('.accountTrigger-trigger-23q > .accountChip-root-1l4 > :nth-child(2)').contains(user.name);
})

And('I click on sign out button', () => {
    cy.get('.accountMenuItems-signOut-3Pz').should('be.visible').click();
    cy.wait(1000);
})

And('I click on sign in button', () => {
    cy.get('[data-cy="SignInButton-root_highPriority"]').click();
})

And('I fill the login_email field', () => {
    cy.get('.signIn-form-nPj > .field-root-ffA > .fieldIcons-root-Gff > .fieldIcons-input-1wB > #email').type(user.email);
})

And('I fill the login_password field', () => {
    cy.get('#Password').type(user.password);
})

When('I click on login_sign in button', () => {
    cy.get('[data-cy="SignInButton-root_highPriority"]').should('be.visible').click();
})

Then('I see the user name', () => {
    cy.get('.accountTrigger-trigger-23q > .accountChip-root-1l4 > :nth-child(2)').contains(user.name);
})