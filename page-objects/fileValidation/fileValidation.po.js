const { assert, expect } = require('chai');
const { BaseAction } = require('../../setup/baseAction');

exports.file = class file extends BaseAction {

    constructor() {
        super();
    }

    /**
   * Creating element object for initializing required locators for home page.
   */
    elements = {
        // Mail form
        username : '#name',
        email : "#email",
        subject : "#subject",
        msg : "#message",
        sendMail : 'input[type="submit"]',


        selectBox : '#file',
        selectFilePath : 'reporter.js',
        selectImgPath : 'imgFile.jpg',
        selectLargeSizeImg : 'largeSizeImg.jpg',
        selectErrorText : '#error',
    };

    

    validationText = {
        emailSentNotification: "Success",
    };

    /**
     * Function to open home page
     */
    async openBrowserWithURL() {
        await this.openBrowser(global.BASE_URL_FILE);
        await this.wait(4)
    }

    async selectBox() {
        await this.browsFile(this.elements.selectBox, this.elements.selectFilePath );
        await this.wait(3);
        let stringToMatch = "Only allowed jpg file format accepted";
        await this.shouldContainTextt(await this.getTextss(this.elements.selectErrorText), stringToMatch);
    }

    async selectCorrectFile() {
        await this.browsFile(this.elements.selectBox, this.elements.selectImgPath);
        await this.wait(3);
        let stringToMatch = "file selected successfully";
        await this.shouldContainTextt(await this.getTextss(this.elements.selectErrorText), stringToMatch);
        await this.wait(3);
    }

    async selectLargeSizeImg(){
        await this.browsFile(this.elements.selectBox, this.elements.selectLargeSizeImg);
        await this.wait(3);
        let stringToMatch = "file size exceed 2 MB";
        await this.shouldContainTextt(await this.getTextss(this.elements.selectErrorText), stringToMatch);
    }


    /**
     * Function to check if login is working okay
     */
    // async loginProcess(loginData) {
    //     await this.type(this.elements.USERNAME_INPUT, loginData.username);
    //     await this.type(this.elements.PASSWORD_INPUT, loginData.password);
    //     await this.click(this.elements.SignIn_Btn);
    // }


    /**
     * Function to check if requested element is displayed on page.
     */
    async verifyPageDisplayed(element) {
        switch (element) {
            case "dashboard":
                await this.shouldVisible(this.elements.profile_DASHBOARD);
                await this.wait(2);
                break;
        }
    }

    /**
     * Function to check if dashboard displayed role wise.
     */
    async verifyPageDisplayedRoleWise(role) {
        await this.wait(2);
        await this.shouldContainText(this.elements.profile_role, role);
    }

    clickNavBarButton() {
        this.wait(5)
        this.click(this.elements.ticketShowBtn);
    }

    clickSendEmailBtn() {
        this.wait(4);
        this.clickVisibleElementOnly(this.elements.singleTicketSendBtn);
    }

    emailSent() {
        this.shouldContainText(
            this.elements.emailSentNotificationText,
            this.validationText.emailSentNotification
        );
    }

    // Acces ticket channel
    navigateToTicketChannel() {
        this.wait(4);
        this.click(this.elements.channelButton);
    }

    logout() {
        this.click(this.elements.logoutBtn);
        cy.get(this.elements.confirmLogoutBtn).contains("Yes").click();
    }
}