import {Page,expect,Locator} from "@playwright/test"

export class HomePage{
    private readonly page:Page;

    //locator
    private readonly lnkMyAccount:Locator;
    private readonly lnkRegister:Locator;
    private readonly lnkLogin:Locator;
    private readonly txtSearchbox:Locator;
    private readonly btnSearch:Locator;

    //constructor
    constructor(page:Page)
    {
        this.page=page;
        this.lnkMyAccount=page.locator('span:has-text("My Account")');
        this.lnkRegister=page.getByRole('link', { name: 'Register' });
        this.lnkLogin=page.getByRole('link', { name: 'Login' });
        this.txtSearchbox=page.getByRole('textbox', { name: 'Search' });
        this.btnSearch=page.locator('button.btn.btn-default.btn-lg');

    }

    //action method

    //check if HomePage exists
    async isHomePageExists()
    {
        let title=await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }

    //click MyAccount link
    async clickMyAccount()
    {
        try{
            await this.lnkMyAccount.click();
        }catch(error){
            console.log(`Exception occured while clicking 'my Account':${error}`);
            throw error;
        }
    }

    
 // Click "Register" link
    async clickRegister(){
        try {
            await this.lnkRegister.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Register': ${error}`);
            throw error;
        }
    }

    // Click "Login" link
    async clickLogin(){
        try {
            await this.lnkLogin.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Login': ${error}`);
            throw error;
        }
    }

    // Enter product name in the search box
    async enterProductName(pName: string){
        try {
            await this.txtSearchbox.fill(pName);
        } catch (error) {
            console.log(`Exception occurred while entering product name: ${error}`);
            throw error;
        }
    }

    // Click the search button
    async clickSearch(){
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Search': ${error}`);
            throw error;
        }
    }
}