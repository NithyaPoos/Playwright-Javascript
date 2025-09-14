import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/index.js';
import testdata from '../test-data/testdata.json'; 



test('invlaidlogin test',async ({page})=>{

    //login page object
    const lp=new LoginPage(page);
    await lp.launchApp("https://login.salesforce.com/");
    await lp.enterUsername(testdata.loginPage.validUsername);
    await lp.enterPassword(testdata.loginPage.invalidPassword);
    await lp.clickLogin();
    const expectedTitle="Home Page ~ Salesforce - Developer Edition";
    const actualTitle=await lp.verifyTitle();
    // expect(actualTitle).toBe(expectedTitle);
    expect(actualTitle).not.toBe(expectedTitle);
    const actualErrorMessage=await lp.getErrorMessage();
    expect(actualErrorMessage).toBe(testdata.loginPage.errorMessage); 
  //expect().toBe("Home Page ~ Salesforce - Developer Edition");
})

