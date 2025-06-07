Feature: Estimating the age of a person by sending person's name to a GET API request
 
 # Positive scenarios
  Scenario Outline: Estimating the age of a person with a valid names
    Given I send a GET request to the user endpoint with the name of a person as "<name>"
    When the response status is ok and "<statusCode>"
    Then the response json body contains name of "<name>" and his age
    And the age returned is valid numerical value

    Examples:
     |name                  |statusCode |
     |Billybob parker       | 200       |
     |billybob-bill parker  | 200       |
     |billybob              | 200       |
     |BILLYBOB              | 200       |
     |a                     | 200       |

# Negative Scenarios
Scenario Outline: Estimating the age of a person with an invalid names
    Given I send a GET request to the user endpoint with the name of a person as "<name>"
    When the response status is ok and "<statusCode>"
    Then the response json body contains name of "<name>" and his age
    But the age returned is null

    Examples:
     |name          |statusCode |
     |a12           | 200       |
     |123           | 200       |
     |              | 200       |
     

