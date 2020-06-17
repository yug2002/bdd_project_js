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

@so
Scenario Outline: Page titles <URL>
  Given I open "<URL>" url
  Then Page title should be "<Title>"
  When I wait "3" seconds

Examples:
| URL                   | Title                                                        |
| https://bash.im/      | Цитатник Рунета                                              |
| https://www.epam.com/ | EPAM \| Enterprise Software Development, Design & Consulting |