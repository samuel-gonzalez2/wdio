describe.skip('Feedback Form', () => {
    it('Should submit feedback form', async () => {
        const name = 'Test User';
        const email = 'test@test.com';
        const subject = 'Test Subject';
        const message = 'Test Message';

        await browser.url('http://zero.webappsecurity.com/index.html');
        await (await $('#feedback')).click();

        await (await $('#name')).setValue(name);
        await (await $('#email')).setValue(email);
        await (await $('#subject')).setValue(subject);
        await (await $('#comment')).setValue(message);
        await (await $('input[type="submit"]')).click();

        await expect(browser).toHaveUrlContaining('/sendFeedback.html');
})
})