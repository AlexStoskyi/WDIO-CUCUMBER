import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page';

const ERROR_MESSAGE = process.env.ERROR_MESSAGE_MANE_PAGE;

Given('User is located on the main page of saucedemo website', async () => {
    await loginPage.open();
});

When('User click "Login" button', async () => {
    await loginPage.btnSubmitClick();
});

Then('User should see "Epic sadface: Username is required" error message', async () => {
   const errorMessage = await loginPage.getTextErrorMessage();
    await expect(errorMessage).toEqual(ERROR_MESSAGE);
});

