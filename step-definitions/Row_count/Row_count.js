const { Given, When, Then } = require('@cucumber/cucumber');
const { rowcount } = require('../../page-objects/row_count/row_count.po');
const { userAccount, mail_details } = require('../../fixtures/rowCountDetails/data.json');

const login = userAccount;
const rowObj = new rowcount();

Given("User visit the form page", async() => {
    await rowObj.openBrowserWithURL();
    
})

When("Enter the {string} details", async(role) => {
    await rowObj.form_details(login[role])
    await rowObj.form_details(login[role])
})

Then("verify that row value is increase or not", async() => {
    await rowObj.check_inc();
})

When("Remove one rows", async() => {
    await rowObj.checkbox();
    await rowObj.delete();
})

Then("verify that rows value is decrease or not", async() => {
    await rowObj.check_dec();
})