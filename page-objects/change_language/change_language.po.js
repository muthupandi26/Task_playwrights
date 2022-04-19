const { assert, expect } = require('chai');
const { BaseAction } = require('../../setup/baseAction');

exports.language = class language extends BaseAction {

    constructor() {
        super();
    }

    /**
   * Creating element object for initializing required locators for home page.
   */
    elements = {
        selectLanguage : 'div[id="SIvCob"] :nth-child(7)',
        selectLanguageText : 'div[class="uU7dJb"] ',
    };

    

    validationText = {
        emailSentNotification: "Success",
    };

    /**
     * Function to open home page
     */
    async openBrowserWithURL() {
        await this.openBrowser(global.BASE_URL_GOOGLE);
        await this.wait(2)
    }

    async changedLanguage() {
        await this.click(this.elements.selectLanguage);
        await this.wait(4);
        let stringToMatch = "ಭಾರತ";
        await this.shouldContainTextt(await this.getTextss(this.elements.selectLanguageText), stringToMatch);
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