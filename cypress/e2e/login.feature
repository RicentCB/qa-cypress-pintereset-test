Feature: Generate New User

    Scenario: The user is able to register in the sign up screen
        When Page has loaded
        Then Click on the sign up button
        Then Type the email 'neson45302@nickolis.com'
        Then Type the password '!Pas123?word'
        Then Type the birthdate '2000-01-28'
        Then Click on the continue button