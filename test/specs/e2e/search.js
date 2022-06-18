describe.skip('Search Feature', () => {
    it('Should search for values using the keyboard press', async () => {
        await browser.url('http://zero.webappsecurity.com/index.html');
        await (await $('#searchTerm')).waitForDisplayed();
        await (await $('#searchTerm')).setValue('bank');
        await browser.keys('Enter');

        const results = await $('h2');
        await expect(results).toHaveTextContaining('Search Results');
    })
})