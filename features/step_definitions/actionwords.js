const { client } = require('nightwatch-cucumber');

const todoInputSelector = 'input.new-todo';
const customTodo = 'Custom ToDo #1';
let counterValue = 0;

const pauseMs = client.globals.runsLocal ? 1000 : 1;

exports.Actionwords = {
    '923e7630-87e4-4e01-8365-3c25b048707a': () => {
        /* a user on the to do list */
        return client
            .url('http://todomvc.com/examples/angularjs/#/')
            .waitForElementVisible(todoInputSelector)
            .assert.visible(todoInputSelector);
    },
    '02a4e6ba-7b59-4b3d-9893-6bc25ff46b8c': newTodo => {
        /* he writes {newTodo} to the 'What needs to be done?' field */
        return client
            .setValue(todoInputSelector, newTodo)
            .pause(pauseMs);
    },
    '1e10672b-59c1-4170-8f18-589d4f8a68a9': () => {
        /* he presses enter */
        return client
            .setValue(todoInputSelector, client.Keys.ENTER)
            .pause(pauseMs);
    },
    '33ebb6ec-ea84-4dde-8c61-9e3420774ea7': existingTodo => {
        /* {existingTodo} is added to the list */
        let isExistingToDoFound = false;

        client
            .elements('css selector', 'li label', results => {
                results.value.forEach(labelWebElement => {
                    client.elementIdText(labelWebElement.ELEMENT, labelElement => {
                        if (labelElement.value === existingTodo) {
                            isExistingToDoFound = true;
                        }
                    });
                });
            })
            .pause(pauseMs);

        return client.perform(() => {
            return client.assert.ok(isExistingToDoFound, `${existingTodo} is added to the list.`);
        });
    },
    '39fa2826-e762-41bb-bc4c-e833b60dfc0d': () => {
        /* he clicks bullet point on the list */

        // Add custom to do in the list.
        return client
            .setValue(todoInputSelector, customTodo)
            .pause(pauseMs)
            .setValue(todoInputSelector, client.Keys.ENTER)
            .pause(pauseMs)
            .element('css selector', '.todo-count', result => {
                client.elementIdText(result.value.ELEMENT, counterElement => {
                    counterValue = Number.parseInt(counterElement.value.split(' ')[0]);
                });
            })
            .pause(pauseMs)
            .elements('css selector', '.todo-list li', results => {
                results.value.forEach(liWebElement => {
                    const liWebElementId = liWebElement.ELEMENT;

                    client
                        .elementIdElement(liWebElementId, 'css selector', 'label', labelWebElement => {
                            const labelWebElementId = labelWebElement.value.ELEMENT;

                            client
                                .elementIdText(labelWebElementId, labelElement => {
                                    // Check if the value of the item is {customToDo}.
                                    if (labelElement.value === customTodo) {
                                        // Click the corresponding bullet point.
                                        client.elementIdElement(liWebElementId, 'css selector', 'input.toggle', inputWebElement => {
                                            client
                                                .elementIdClick(inputWebElement.value.ELEMENT)
                                                .pause(pauseMs);
                                        });
                                    }
                                });
                        });
                });
            });
    },
    '9f17fecd-430f-4127-b360-2587cce9b7b7': () => {
        /* the item is marked as done */
        let liHasCompletedClass = false;

        client
            .elements('css selector', '.todo-list li', results => {
                results.value.forEach(liWebElement => {
                    const liWebElementId = liWebElement.ELEMENT;

                    client
                        .elementIdElement(liWebElementId, 'css selector', 'label', labelWebElement => {
                            const labelWebElementId = labelWebElement.value.ELEMENT;

                            client
                                .elementIdText(labelWebElementId, labelElement => {
                                    if (labelElement.value === customTodo) {
                                        // The <li /> should have the 'completed' class.
                                        client
                                            .elementIdAttribute(liWebElementId, 'class', liElement => {
                                                if (liElement.value.split(' ').indexOf('completed') >= 0) {
                                                    liHasCompletedClass = true;
                                                }
                                            });
                                    }
                                });
                        });
                });
            });

        return client.perform(() => {
            return client.assert.ok(liHasCompletedClass, 'The item was marked as done.');
        });
    },
    'af314ec0-268b-4393-a562-0ffcccee5431': () => {
        /* the Items counter is updated */
        let newCounterValue;

        client
            .element('css selector', '.todo-count', result => {
                client.elementIdText(result.value.ELEMENT, counterElement => {
                    newCounterValue = Number.parseInt(counterElement.value.split(' ')[0]);
                });
            })
            .pause(pauseMs);

        return client.perform(() => {
            return client.assert.ok(newCounterValue && newCounterValue === counterValue - 1, 'The items counter is updated.');
        });
    },
    '99106abf-d1b3-487e-bc3d-532ee5076cfd': () => {
        /* he presses on the X button for an item */

        return client
            .elements('css selector', '.todo-list li', results => {
                results.value.forEach(liWebElement => {
                    const liWebElementId = liWebElement.ELEMENT;

                    client
                        .elementIdElement(liWebElementId, 'css selector', 'label', labelWebElement => {
                            const labelWebElementId = labelWebElement.value.ELEMENT;

                            client
                                .elementIdText(labelWebElementId, labelElement => {
                                    // Check if the value of the item is {customToDo}.
                                    if (labelElement.value === customTodo) {
                                        // Click the corresponding bullet point.
                                        client
                                            .elementIdElement(liWebElementId, 'css selector', 'button.destroy', removeWebElement => {
                                                client
                                                    .moveTo(liWebElementId, null, null)
                                                    .elementIdClick(removeWebElement.value.ELEMENT)
                                                    .pause(pauseMs);
                                            });
                                    }
                                });
                        });
                });
            });
    },
    'b9698861-f4f9-4a2b-a26c-ceccebcbc49d': () => {
        /* the item is removed from the list */
        let isCustomToDoFound = false;

        client
            .elements('css selector', 'li label', results => {
                results.value.forEach(labelWebElement => {
                    client.elementIdText(labelWebElement.ELEMENT, labelElement => {
                        if (labelElement.value === customTodo) {
                            isCustomToDoFound = true;
                        }
                    });
                });
            })
            .pause(pauseMs);

        return client.perform(() => {
            return client.assert.ok(!isCustomToDoFound, `${customTodo} is removed from the list.`);
        });
    },
    '637660c6-9250-4089-8ed8-624958dcf75a': () => {
        /* he filters the list by Active status */
    },
    '63ada289-e1ff-4bd2-be62-63f195a241c0': () => {
        /* the list is filtered showing only unmarked items */
    },
    '7ff96703-4df8-488b-8b64-eded22420541': () => {
        /* he filters the list by Complete status */
    },
    'ca243496-4bb8-4a66-bc88-2ceb3bbe0b0a': () => {
        /* the list is filtered showing only marked items */
    },
    '908bc3ff-2732-4078-8584-cfc4d1b25478': () => {
        /* he clicks on Clear Completed option */
    },
    '97d6f2ff-3234-4909-b71c-051dca6f25d1': () => {
        /* all marked items are deleted from the list */
    }
};
