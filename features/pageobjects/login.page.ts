import Page from "./page";

class LoginPage extends Page {
  public get errorMessage() {
    return $(`[data-test="error"]`);
  }
  public get loginButton() {
    return $("#login-button");
  }
  public async loginButtonClick() {
    await this.loginButton.click();
  }
  public async textErrorMessage() {
    const textMessage = await this.errorMessage;
    return textMessage.getText();
  }
  public open() {
    return super.open();
  }
}

export default new LoginPage();
