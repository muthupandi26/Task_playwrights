const { Given, When, Then } = require('@cucumber/cucumber');
const { conversation } = require('../../page-objects/previous_conversation/previous_conversation.po');
const { userAccount } = require('../../fixtures/previous_conversation/data.json');

const login = userAccount;
const conversationObj = new conversation();

Given("User visit facebook page", async() => {
    await conversationObj.openBrowserWithURL();
})

When("User login with {string} username & password", async(role) => {
    await conversationObj.loginProcess(login[role]);
});

Then('Go to the message chat', async() => {
    await conversationObj.message();
})



