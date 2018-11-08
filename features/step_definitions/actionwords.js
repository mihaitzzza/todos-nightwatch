var { client } = require('nightwatch-cucumber');

var todoInputSelector = 'input.new-todo';

exports.Actionwords = {
    '923e7630-87e4-4e01-8365-3c25b048707a': () => {
        // a user on the to do list
        return client
            .url('http://todomvc.com/examples/angularjs/#/')
            .waitForElementVisible(todoInputSelector)
            .assert.visible(todoInputSelector);
    },
    '63a7942a-dfd2-480e-880e-124ad9babec4': () => {
        // a user on the to do form
        return client
            .url('http://todomvc.com/examples/angularjs/#/')
            .waitForElementVisible(todoInputSelector)
            .assert.visible(todoInputSelector);
    },
    '02a4e6ba-7b59-4b3d-9893-6bc25ff46b8c': newTodo => {
        // he writes {newTodo} to the 'What needs to be done?' field
        return client
            .setValue(todoInputSelector, newTodo);
    },
    '1e10672b-59c1-4170-8f18-589d4f8a68a9': () => {
        // he presses enter
        return client
            .submitForm(todoInputSelector);
    },
    '33ebb6ec-ea84-4dde-8c61-9e3420774ea7': existingTodo => {
        // {existingTodo} is added to the list
        // return client
        //     .assert.containsText('ul.todo-list', existingTodo);
        return client
            .elements('css selector', 'li label', results => {
                results.value.forEach(element => {
                    console.log('el', element.ELEMENT);
                })
            })
    },
    '39fa2826-e762-41bb-bc4c-e833b60dfc0d': () => {
        // he clicks bullet point on the list
    },
    '9f17fecd-430f-4127-b360-2587cce9b7b7': () => {
        // the item is marked as done
    },
    'af314ec0-268b-4393-a562-0ffcccee5431': () => {
        // the Items counter is updated
    },
    '99106abf-d1b3-487e-bc3d-532ee5076cfd': () => {
        // he presses on the X button for an item
    },
    'b9698861-f4f9-4a2b-a26c-ceccebcbc49d': () => {
        // the item is removed from the list
    },
    '637660c6-9250-4089-8ed8-624958dcf75a': () => {
        // he filters the list by Active status
    },
    '63ada289-e1ff-4bd2-be62-63f195a241c0': () => {
        // the list is filtered showing only unmarked items
    },
    '7ff96703-4df8-488b-8b64-eded22420541': () => {
        // he filters the list by Complete status
    },
    'ca243496-4bb8-4a66-bc88-2ceb3bbe0b0a': () => {
        // the list is filtered showing only marked items
    },
    '908bc3ff-2732-4078-8584-cfc4d1b25478': () => {
        // he clicks on Clear Completed option
    },
    '97d6f2ff-3234-4909-b71c-051dca6f25d1': () => {
        // all marked items are deleted from the list
    }
};
