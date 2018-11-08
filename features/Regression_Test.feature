Feature: Regression Test


  @regression_test @Priority_P1
  Scenario: Filter list by Active Status (uid:244bcb05-5485-4f0d-8240-bf625c7e4369)
    Given a user on the To Do list
    When he filters the list by Active status
    Then the list is filtered showing only unmarked items

  @regression_test @Priority_P1
  Scenario: Filter list by Complete Status (uid:f4634298-62fa-4fad-a790-05e2bf98fb20)
    Given a user on the To Do list
    When he filters the list by Complete status
    Then the list is filtered showing only marked items

  @regression_test @Priority_P1
  Scenario: Clear completed items (uid:f9d815e4-bcae-4bce-b950-515dc7d94d63)
    Given a user on the To Do list
    When he clicks on Clear Completed option
    Then all marked items are deleted from the list
