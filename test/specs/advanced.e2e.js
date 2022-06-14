describe('Advanced testing', async () => {
    it('File upload', async () => {
        await browser.url("https://the-internet.herokuapp.com/upload");

        const filePath = './example.png';
        const remoteFilePath = await browser.uploadFile(filePath);

        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();
        await browser.pause(3000);
    })
})