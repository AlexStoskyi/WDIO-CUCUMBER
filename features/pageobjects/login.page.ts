import Page from './page';

class LoginPage extends Page {
    public get alertMessage() {
        return $(`[data-test="error"]`);
    }
    public get btnSubmit() {
        return $("#login-button");
    }
    public async btnSubmitClick() {
        await this.btnSubmit.click();
    }
    public async getTextErrorMessage() {
        return (await this.alertMessage).getText();
    }
    public open() {
        return super.open();
    }
}

export default new LoginPage();
