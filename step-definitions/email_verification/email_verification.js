const { Given, When, Then } = require('@cucumber/cucumber');
const { email } = require('../../page-objects/email_verification/email_verification.po');
const { userAccount, mail_details } = require('../../fixtures/email_verification/data.json');

const login = userAccount;
const mail = mail_details;
const emailObj = new email();

Given("User visit the Gmail form page", async() => {
    await emailObj.openBrowserWithURL();
    
})

When("User Enter the {string} role credentials", async(role) => {
    await emailObj.form_values(mail[role]);
});

Then("Assert the mail subject if correct", async() => {
    // await homepageObj.mailCheck();
    // await homepageObj.mailChecking();
})


