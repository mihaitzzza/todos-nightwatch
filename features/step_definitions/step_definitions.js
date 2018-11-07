const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Before, After, Given, When, Then, BeforeAll, AfterAll}) {

BeforeAll(function() {
});

Before(function (scenario) {
    	this.actionwords = Object.create(require(__dirname + '/actionwords.js')).Actionwords;
});

After(function (scenario) {
});

AfterAll(function() {
Promise.resolve();
});


    Given("a user on the todo list", function () {
            return this.actionwords["923e7630-87e4-4e01-8365-3c25b048707a"]();
    });




});
