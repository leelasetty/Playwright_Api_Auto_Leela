Feature: Estimating the age of a person name with a api GET request
 
  Scenario Outline: Estimating the age of a person with a valid names
    Given I send a GET request to the user endpoint with the name of a person as "<name>"
    When the response status is ok and "<statusCode>"
    Then the response json body contains name as "<name>" and his age
    And the age returned is valid numerical value

    Examples:
     |name                  |statusCode |
     |billybob parker       | 200       |
     #|billybob-bill parker  | 200       |
     #|billybob              | 200       |
     #|BILLYBOB              | 200       |
     #|a                     | 200       |

Scenario Outline: Estimating the age of a person with a invalid names
    Given I send a GET request to the user endpoint with the name of a person as "<name>"
    When the response status is ok and "<statusCode>"
    Then the response json body contains name as "<name>" and his age
    But the age returned is null

    Examples:
     |name          |statusCode |
     #|a12           | 200       |
     #|123           | 200       |
     

