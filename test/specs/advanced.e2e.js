describe('Advanced testing', async () => {
    beforeEach(async () => {
        openUrl("https://the-internet.herokuapp.com/upload");
    })
    it('File upload 1', async () => {
        // await browser.url("https://the-internet.herokuapp.com/upload");

        const filePath = './example.png';
        const remoteFilePath = await browser.uploadFile(filePath);

        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();
        await browser.pause(3000);
    })

    it('File upload 2', async () => {
        // await browser.url("https://the-internet.herokuapp.com/upload");

        const filePath = './example.png';
        const remoteFilePath = await browser.uploadFile(filePath);

        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();
        await browser.pause(3000);
    })

    it('File upload 3', async () => {
        // await browser.url("https://the-internet.herokuapp.com/upload");

        const filePath = './example.png';
/*         const remoteFilePath = await browser.uploadFile(filePath);

        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click(); */
        browser.customFileUpload(filePath, '#file-upload', '#file-submit');
        await browser.pause(3000);
    })

    it('Display Title and URL', async () => {
        const results = browser.getTitleAndUrl()
        console.log('TITLE: ' + results.title)
        console.log('URL: ' + results.url)

        browser.waitAndClick('#file-submit');
        browser.pause(5000);
    })

    it.only('Change Session ID', async () => {
        console.log('SESSION BEFORE RELOAD' + browser.sessionId)
        await browser.reloadSession()
        console.log('SESSION AFTER RELOAD' + browser.sessionId)
    })
    
})

async function openUrl(url) {
    await browser.url(url);
    await browser.pause(2000);
}