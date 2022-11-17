import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import MinicartPage from '../pages/MinicartPage'
import CheckoutPage from '../pages/CheckoutPage'
import 'cypress-iframe'


var signup = new SignupPage
var login = new LoginPage
var home = new HomePage
var product = new ProductPage
var minicart = new MinicartPage
var checkout = new CheckoutPage



Given('I go to sign in page', () => {
    signup.gosign()
})

And('I fill the login form', () => {
    login.fillloginform() 
})

And('I click on login_sign in button', () => {
    login.clicksignin() 
})

And('I click on add to cart button', () => {
    home.addtocartbutton()
})

And('I select the color', () => {
    product.lattercolorbutton()
})

And('I select the size', () => {
    product.lsizebutton()
})

And('I click on add to cart', () => {
    product.addbutton()
})

And('I click on the minicart icon', () => {
    home.minicart()
})

And('I click on the checkout button', () => {
    minicart.checkoutbutton()
})

And('I fill the card name', () => {
    checkout.cardname()
})

And('I fill the card number', () => {
    checkout.cardnumber()
})

And('I fill the card expiration', () => {
    checkout.cardexpiration()
})

And('I fill the cvv', () => {
    checkout.cvv()
})

And('I click on the review button', () => {
    checkout.reviewbutton()
})

When('I click on the place order button', () => {
    checkout.placeorderbutton()
})

Then('I see the confirmation message', () => {
    checkout.confirmationmessage()
})
