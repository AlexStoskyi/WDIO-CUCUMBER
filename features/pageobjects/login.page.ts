// import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    public get alertMessage() {
        return $(`[data-test="error"]`);
    }
    public get inputUsername () {
        return $("#user-name");
    }

    public get inputPassword () {
        return $("#password");
    }

    public get btnSubmit () {
        return $("#login-button");
    }
    public async btnSubmitClick() {
        await this.btnSubmit.click();
    }
    public async getTextErrorMessage() {
        return (await this.alertMessage).getText();
    }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public open () {
        return super.open();
    }
}

export default new LoginPage();
