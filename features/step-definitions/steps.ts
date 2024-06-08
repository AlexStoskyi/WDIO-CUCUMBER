import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page';

Given('User is located on the main page of saucedemo website', async () => {
    await loginPage.open();
});

When('User click "Login" button', async () => {
    await loginPage.btnSubmitClick();
});

Then('User should see "Epic sadface: Username is required" error message', async () => {
    const error = await loginPage.alertMessage
    const neededText = await error.getText();
    await expect(neededText).toEqual('Epic sadface: Username is required');
});

