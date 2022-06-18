describe('Sauce Demo - Product Order', ()=>{
    before(async ()=>{
        await browser.url('https://www.saucedemo.com');
        await browser.sauceLogin();
        await browser.pause(4000);
    })

    after(async ()=>{
        await browser.sauceLogout();
    })

    it('Should complete product order', async ()=>{
        await $('#inventory_container').waitForDisplayed();
        await $('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await $('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await $('.shopping_cart_link').click();

        await $('.cart_list').waitForDisplayed();
        await $('[data-test="checkout"]').click();

        const name = "Pedro"
        const lastName = "Perez"
        const postalCode = "12345"

        await $('[data-test="firstName"]').setValue(name);
        await $('[data-test="lastName"]').setValue(lastName);
        await $('[data-test="postalCode"]').setValue(postalCode);
        await $('[data-test="continue"]').click();

        await $('.cart_list').waitForDisplayed();
        await $('.summary_info').waitForDisplayed();
        await $('[data-test="finish"]').click();

        const message = await $('.complete_header')
        expect(message).toHaveTextContaining('THANK YOU FOR YOUR ORDER');

    })
} )