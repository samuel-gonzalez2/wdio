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

    it('Change Session ID', async () => {
        console.log('SESSION BEFORE RELOAD' + browser.sessionId)
        await browser.reloadSession()
        console.log('SESSION AFTER RELOAD' + browser.sessionId)
    })

    it('Create and switch new window', async () => {
        await browser.url('https://www.google.com')
        await browser.pause(2000)

        await browser.newWindow('https://www.bbva.com')
        await browser.pause(2000)

        await browser.switchWindow('https://www.google.com')
    } )

    it('Network throttle', async () => {
        await browser.throttle('Regular3G')
        await browser.url('https://www.bbva.com')
        await browser.pause(2000)

        await browser.throttle('Regular4G')
        await browser.url('https://www.bbva.com')
        await browser.pause(2000)

        await browser.throttle('offline')
        await browser.url('https://www.bbva.com')
        await browser.pause(2000)
        
    })
    
    it.only('Execute JS code inside the browser', async() => {
        const result = await browser.execute((a, b) =>{
            return a + b
        }, 1, 2)

        await expect(result).toBe(3)
    })
})

async function openUrl(url) {
    await browser.url(url);
    await browser.pause(2000);
}