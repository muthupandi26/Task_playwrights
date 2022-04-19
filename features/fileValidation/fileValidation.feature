Feature: Validate the file type

    Scenario: Validate the input file type
        Given User visit the input file form page
        When Select the Wrong file format & assert the Error
        When Select the Correct file & assert the Message
        # When Select more than 2Mb file Images