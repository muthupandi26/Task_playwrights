const { Given, When, Then } = require('@cucumber/cucumber');
const { language } = require('../../page-objects/change_language/change_language.po');


const languageObj = new language();

Given("User visit Google page", async() => {
    await languageObj.openBrowserWithURL();
    
})

When("Select any language & Assert the text", async() => {
    await languageObj.changedLanguage();
})
