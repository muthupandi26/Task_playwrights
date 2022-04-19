Feature: Visit the page Facebook page

    Scenario: Visit the page Facebook page
        Given User visit facebook page
        When User login with 'admin_2' username & password
        Then Go to the message chat
        # Then Verify session transfer
        # When logout the facebook page
