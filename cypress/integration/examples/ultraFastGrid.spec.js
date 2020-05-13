describe("Demo app", () => {

    it(`Ultrafast Grid`, function () {
        cy.eyesOpen({
            appName: 'Demo App',
            testName: 'Ultrafast grid demo',
            browser: [
                {width: 800, height: 600, name: "chrome"},
                {width: 700, height: 500, name: "firefox"},
                {width: 1600, height: 1200, name: "ie11"},
                {width: 1024, height: 768, name: "edgechromium"},
                {width: 800, height: 600, name: "safari"},
                {
                    deviceName: 'iPhone X',
                    screenOrientation: 'portrait'
                },
                {
                    deviceName: 'Pixel 2',
                    screenOrientation: 'portrait'
                },
            ],
            batchName: 'Ultrafast Batch'
        })
        cy.visit('https://demo.applitools.com');
        cy.eyesCheckWindow({
            tag: "Login Window",
            target: 'window',
            fully: true
        });

        cy.get('#log-in').click()

        cy.eyesCheckWindow({
            tag: "App Window",
            target: 'window',
            fully: true
        });

        cy.eyesClose()
    });

});