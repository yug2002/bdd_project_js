@smoke
Feature: Home Page Title

Scenario: page title
  Given I open epam.com
  Then Page title should be "EPAM | Enterprise Software Development, Design & Consulting"
  When I wait 10 seconds
