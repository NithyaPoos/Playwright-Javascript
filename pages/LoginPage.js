import {BasePage} from "./BasePage.js";
export class LoginPage extends BasePage{
constructor(page)
{
    super(page);
    this.usernameField='#username';
    this.passwordField='#password';
    this.loginButton='[id="Login"]';  
    this.errorMessage='#error';  
}

async enterUsername(username)
{
await this.page.fill(this.usernameField,username);
//await this.page.locator(this.usernameField).fill(username); 
}
async enterPassword(password)
{
await this.page.fill(this.passwordField,password);
}
async clickLogin()
{
//await page.waitForSelector(this.loginButton);
await this.page.click(this.loginButton);
}
async login(username,password){
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
}
async verifyTitle(){
    return await this.page.title();
}
async getErrorMessage(){
   return await this.page.textContent(this.errorMessage);
}

}