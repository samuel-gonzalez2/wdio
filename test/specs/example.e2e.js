/* describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
}); */

describe('My first test suite', () => {
    it('my first wdio test', async () => {
        //TODO
        let myUrl = "https://www.example.com";
        let smallPause = 2000;
        let largePause = 5000;

        await browser.url(myUrl);
        await browser.pause(smallPause);

/*      await browser.url("https://www.saucedemo.com/");
        await browser.pause(largePause); */

        //In procees of being deprecated
        let pageTitle = await browser.getTitle();
        let pageUrl = await browser.getUrl();

/*         expect (pageTitle).toContain("Example Domain");
        expect (pageUrl).toContain("example.com"); */

        //Modern way of doing it
        await expect(browser).toHaveTitleContaining("Example Domain");
        await expect(browser).toHaveUrlContaining("example.com");

        let pageElement = await $('h1');
        await expect(pageElement).toBeExisting();
        await expect (pageElement).toBeDisplayed();
        await expect (pageElement).toHaveTextContaining("Example");
    });

    it.only('Forms and inputs', async () => {
        await browser.url("https://www.saucedemo.com/");
        await browser.pause(2000);

        let username = await $('#user-name');
        await username.setValue("standard_user");
        await browser.pause(2000);

        let password = await $('#password');
        await password.setValue("secret_sauce");
        await browser.pause(2000);

        let loginButton = await $('#login-button');
        await loginButton.click();
        await browser.pause(2000);

        let inventoryContainer = await $('#inventory_container');
        await expect(inventoryContainer).toBeExisting();
    })
});