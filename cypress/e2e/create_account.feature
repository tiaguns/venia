Feature: Create Account

Scenario: Access account form
Given I go to venia website
And I click on sign in button
And I click on create an account button
And I see the account form
And I fill the name field
And I fill the last name field
And I fill the email field
And I fill the password field
And I click on create button
And I see the user name
And I click on sign out button
And I click on sign in button
And I fill the login_email field
And I fill the login_password field
When I click on login_sign in button
Then I see the user name
