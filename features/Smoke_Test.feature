Feature: Smoke Test


  @smoke_test @Priority_P0 @JIRA-AA-001
  Scenario Outline: Add items to the list (<hiptest-uid>)
    Given a user on the To Do list
    When he writes "<item>" to the 'What needs to be done?' field
    And he presses enter
    Then "<item>" is added to the list

    Examples:
      | item | hiptest-uid |
      | Repair the Car | uid:60bf8702-7614-485c-8723-c9b2d58f7fbb |
      | Pay bills | uid:854c6162-1f81-4f5a-89bd-6588d9e0ec75 |
      | Buy flowers | uid:b967982c-1189-4c3c-9a85-778018d1b564 |

  @smokte_test @Priority_P0
  Scenario: Mark items as done (uid:0ba7de87-241a-4691-b78d-49cef15d3cb8)
    Given a user on the To Do list
    When he clicks bullet point on the list
    Then the item is marked as done
    And the Items counter is updated

  @smokte_test @Priority_P0
  Scenario: Remove items from the list (uid:ab8583b7-2e46-4bd8-b32c-f6345f6f54e4)
    Given a user on the To Do list
    When he presses on the X button for an item
    Then the item is removed from the list
