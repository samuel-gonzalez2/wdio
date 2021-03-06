describe.skip('Login Flow', () => {
    before(async () => {
        await browser.url('http://zero.webappsecurity.com/index.html');
    })
    
    it('Should not login with invalid username and password', async () => { 
        await $('#signin_button').click();
        await browser.pause(2000);

        await (await $('#login_form')).waitForDisplayed();
        await $('#user_login').setValue('invalid_username');
        await $('#user_password').setValue('invalid_password');

        await $(await $('input[type = "submit"]')).click();

        const errorMessage = await $('.alert-error')
        await expect(errorMessage).toHaveTextContaining('Login and/or password are wrong');

    })

    it('Reset account password', async () => {
        const email = 'test@test.com';

        await $('*=Forgot').click();
        await (await $('#user_email')).setValue(email);
        await (await $('input[type="submit"]')).click();

        const message = await $('.span6')
        await expect(message).toHaveTextContaining(`email: ${email}`);

    })
})