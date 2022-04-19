Feature: Visit

    Scenario: Visit the page
        Given User is on home page
        When User login with 'admin_2' role credentials
        Then User send the message
        Then Verify session transfer
        When logout the facebook page
