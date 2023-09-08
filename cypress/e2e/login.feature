Feature: Generate New User

    Scenario: The user is able to register in the sign up screen
        When Page has loaded
        Then Click on the sign up button
        Then Type the email "neson45302@nickolis.com"
        Then Type the password "!Pas123?word"
        Then Type the birthdate "2000-01-28"
        Then Click on the continue button

    Scenario: The email field is required
        When Page has loaded
        Then Click on the sign up button
        Then Click on the continue button
        Then Verify error on email field "You missed a spot! Don't forget to add your email."
    
    Scenario: The password field is required
        When Page has loaded
        Then Click on the sign up button
        Then Type the email "neson45302@nickolis.com"
        Then Click on the continue button
        Then Verify error on password field "Your password is too short! You need 6+ characters."
    
    Scenario: The birthdate field is required
        When Page has loaded
        Then Click on the sign up button
        Then Type the email "newuser@domain.com"
        Then Type the password "!Pas123?word"
        Then Click on the continue button
        Then Verify error on birthdate field "You missed a spot. Don’t forget to add your birthday."