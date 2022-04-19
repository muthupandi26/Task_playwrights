const { Given, When, Then } = require('@cucumber/cucumber');
const { file } = require('../../page-objects/fileValidation/fileValidation.po');
const { userAccount, mail_details } = require('../../fixtures/rowCountDetails/data.json');

const login = userAccount;
const fileObj = new file();

Given("User visit the input file form page", async() => {
    await fileObj.openBrowserWithURL();
    
})

When("Select the Wrong file format & assert the Error", async() => {
    await fileObj.selectBox();
})

When("Select the Correct file & assert the Message", async() => {
    await fileObj.selectCorrectFile();
})

When("Select more than 2Mb file Images", async() => {
    await fileObj.selectLargeSizeImg();
})