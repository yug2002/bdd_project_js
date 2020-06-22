@smoke
Feature: Home Page Title

@epam
Scenario: page title
  Given I open "https://www.epam.com/" url
  Then Page title should be "Engineering the Future"
    And Page title should not be "EPAM | Enterprise Software Development, Design & Consultingtttt"
  When I wait "3" seconds

@so
Scenario Outline: Page titles <URL>
  Given I open "<URL>" url
  Then Page title should be "<Title>"
  When I wait "3" seconds

Examples:
| URL                   | Title                  |
| https://www.epam.com/ | Engineering the Future |