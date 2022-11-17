import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'


var signup = new SignupPage
var login = new LoginPage
var home = new HomePage



Given('I go to sign in page', () => {
    signup.gosign()
})

And('I fill the email field form', () => {
    login.fillemailfield()
})


And('I fill the password field', () => {
    login.fillpasswordfieldw() 
})

And('I click on login_sign in button', () => {
    login.clicksignin() 
})

And('I see the invalid password message', () => {
    login.invalidloginmessage()
})