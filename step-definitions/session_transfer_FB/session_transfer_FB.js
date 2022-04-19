const { Given, When, Then } = require('@cucumber/cucumber');
const { sessionTransfer } = require('../../page-objects/session_transfer_FB/session_transfer_FB.po');
const { userAccount } = require('../../fixtures/session_transfer_FB/data.json');

const login = userAccount;
const sessionObj = new sessionTransfer();

Given("User is on home page", async() => {
    await sessionObj.openBrowserWithURL();
    
})

When("User login with {string} role credentials", async(role) => {
    await sessionObj.loginProcess(login[role]);
});

Then('User send the message', async() => {
    await sessionObj.message();
})

Then("Verify session transfer", async() => {
    await sessionObj.secondTab();
    await sessionObj.checkMsg();
})

When("logout the facebook page", async() => {
    await sessionObj.logOutFb();
})












When("login the {string} user new Tab", async(role) => {
    await homepageObj.openNewTab('https://www.facebook.com/');
    await homepageObj.loginProcess_2(login[role]);
})

Then("last message Assert", async() => {
    await homepageObj.message_check();
    await homepageObj.logOutFb_2();
})

