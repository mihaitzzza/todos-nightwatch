const { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Before, After, Given, When, Then, BeforeAll, AfterAll }) {
    BeforeAll(function () {
    });

    Before(function (scenario) {
        this.actionwords = Object.create(require(__dirname + '/actionwords.js')).Actionwords;
    });

    After(function (scenario) {
    });

    AfterAll(function () {
        Promise.resolve();
    });

    Given('a user on the To Do list', function () {
        return this.actionwords['923e7630-87e4-4e01-8365-3c25b048707a']();
    });

    Given('a user on the To Do form', function () {
        return this.actionwords['63a7942a-dfd2-480e-880e-124ad9babec4']();
    });

    When('he writes {string} to the \'What needs to be done\?\' field', function (p1) {
        return this.actionwords['02a4e6ba-7b59-4b3d-9893-6bc25ff46b8c'](p1);
    });

    When('he presses enter', function () {
        return this.actionwords['1e10672b-59c1-4170-8f18-589d4f8a68a9']();
    });

    Then('{string} is added to the list', function (p1) {
        return this.actionwords['33ebb6ec-ea84-4dde-8c61-9e3420774ea7'](p1);
    });

    When('he clicks bullet point on the list', function () {
        return this.actionwords['39fa2826-e762-41bb-bc4c-e833b60dfc0d']();
    });

    Then('the item is marked as done', function () {
        return this.actionwords['9f17fecd-430f-4127-b360-2587cce9b7b7']();
    });

    Then('the Items counter is updated', function () {
        return this.actionwords['af314ec0-268b-4393-a562-0ffcccee5431']();
    });

    When('he presses on the X button for an item', function () {
        return this.actionwords['99106abf-d1b3-487e-bc3d-532ee5076cfd']();
    });

    Then('the item is removed from the list', function () {
        return this.actionwords['b9698861-f4f9-4a2b-a26c-ceccebcbc49d']();
    });

    When('he filters the list by Active status', function () {
        return this.actionwords['637660c6-9250-4089-8ed8-624958dcf75a']();
    });

    Then('the list is filtered showing only unmarked items', function () {
        return this.actionwords['63ada289-e1ff-4bd2-be62-63f195a241c0']();
    });

    When('he filters the list by Complete status', function () {
        return this.actionwords['7ff96703-4df8-488b-8b64-eded22420541']();
    });

    Then('the list is filtered showing only marked items', function () {
        return this.actionwords['ca243496-4bb8-4a66-bc88-2ceb3bbe0b0a']();
    });

    When('he clicks on Clear Completed option', function () {
        return this.actionwords['908bc3ff-2732-4078-8584-cfc4d1b25478']();
    });

    Then('all marked items are deleted from the list', function () {
        return this.actionwords['97d6f2ff-3234-4909-b71c-051dca6f25d1']();
    });
});
