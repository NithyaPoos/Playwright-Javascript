class BasePage{
    constructor(page)
    {
       this.page=page;
    }
    
    // async launchApp(path='/'){
    //     await this.page.goto(path); 
    // }

    async launchApp(path="https://login.salesforce.com/")
    {
     await this.page.goto(path);
   }
}

export {BasePage};