@smoke
Feature: Home Page Title

@epam1
Scenario: page title
  Given I open "https://www.epam.com/" url
  Then Page title should be "Engineering the Future"
    And Page title should not be "EPAM | Enterprise Software Development, Design & Consulting"
  When I wait "3" seconds

