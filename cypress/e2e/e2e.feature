
Feature: E2E

Scenario: Realizar uma compra com sucesso
Given I go to sign in page
And I fill the login form
And I click on login_sign in button
And I see the first name
And I click on add to cart button
And I select the color
And I select the size
And I click on add to cart
And I click on the minicart icon
And I click on the checkout button
And I fill the card name
And I fill the card number
And I fill the card expiration
And I fill the cvv
And I click on the review button
When I click on the place order button
Then I see the confirmation message
