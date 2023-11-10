Feature: Checkers Board
    The user is able to use the board, and play with the orange pieces
    
    # Scenario: The user can use the Restart Button
    #     When The user navigate to the home page
    #     Then Click on the Restart Button
    #     Then Check if the page has been loaded correctly
    
    Scenario: The user can see only 12 blue and 12 orange pieces
        When The user navigate to the home page
        Then Check if there are just 12 blue pieces in the board
        Then Check if there are just 12 orange pieces in the board
