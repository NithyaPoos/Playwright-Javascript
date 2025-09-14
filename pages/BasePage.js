class BasePage{
    constructor(page)
    {
       this.page=page;
    }
    
    // async launchApp(path='/'){
    //     await this.page.goto(path); 
    // }
//env var path = process.env.BASE_URL || '/'
    //async launchApp(path="https://login.salesforce.com/")
   async launchApp(path="/")
    {
      try{
     //await this.page.goto(path,{waitUntil:'documentloaded'});    
     await this.page.goto(path);
     console.log('Navigated to the url ${path}');
      }
      catch(error){
      console.error(`Failed to navigate to the url ${path}: ${error}`);
      }
   }


async waitForElement(selector, timeout = 5000) {
    try {
      await this.page.waitForSelector(selector, { timeout });
    } catch (error) {
      console.error(` Element not found: ${selector}`, error);
    }
  }


  async getText(selector) {
    await this.waitForElement(selector);
    return await this.page.textContent(selector);
  }

  async isVisible(selector) {
    try {
      return await this.page.isVisible(selector);
    } catch {
      return false;
    }
}
async clickIfVisible(selector) {
    if (await this.isVisible(selector)) {
      await this.page.click(selector);
    } else {
      console.warn(`Element not visible: ${selector}`);
    }
  }


}

export {BasePage};