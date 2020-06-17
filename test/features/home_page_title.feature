@smoke
Feature: Home Page Title

@epam
Scenario: page title
  Given I open "https://www.epam.com/" url
  Then Page title should be "EPAM | Enterprise Software Development, Design & Consulting"
    And Page title should not be "EPAM | Enterprise Software Development, Design & Consultingtttt"
  When I wait "3" seconds

Scenario: page title
  Given I open "https://bash.im/" url
  Then Page title should be "Цитатник Рунета"
  When I wait "3" seconds