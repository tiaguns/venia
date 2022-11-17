import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import SignupPage from '../pages/SignupPage'
import signupfactory from '../factories/signupfactory'
import LoginPage from '../pages/LoginPage'


var signup = new SignupPage
var login = new LoginPage
var user = signupfactory.user()

Given('I access the signup page', () => {
    signup.go()
})

And('I fill the user form', () => {
    signup.fillForm(user)
})

And('I click on the create an account button', () => {
    signup.submit()
})    

And('I see the first name', () => {
    login.confirm()
})    

And('I singout from user account', () => {
    signup.singout()
})

And('I access the login page', () => {
    signup.gotosignup()
})

And('I fill the email', () => {
    signup.fillemailfield().type(user.email);
    
})

And('I fill the password', () => {
    cy.get('#Password').type(user.password);
    
})