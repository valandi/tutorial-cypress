describe("AppTest", () => {

    it(`ultraFastTest`, function () {
        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Demo App',
            testName: 'Ultrafast grid demo',
            browser: [
                // Add browsers with different viewports
                {width: 800, height: 600, name: "chrome"},
                {width: 700, height: 500, name: "firefox"},
                {width: 1600, height: 1200, name: "ie11"},
                {width: 1024, height: 768, name: "edgechromium"},
                {width: 800, height: 600, name: "safari"},
                // Add mobile emulation devices in Portrait mode
                {
                    deviceName: 'iPhone X',
                    screenOrientation: 'portrait'
                },
                {
                    deviceName: 'Pixel 2',
                    screenOrientation: 'portrait'
                },
            ],
            // set batch name to the configuration
            batchName: 'Ultrafast Batch'
        })
        cy.visit('https://demo.applitools.com');
        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.eyesCheckWindow({
            tag: "Login Window",
            target: 'window',
            fully: true
        });

        cy.get('#log-in').click()

        // Check the app page
        cy.eyesCheckWindow({
            tag: "App Window",
            target: 'window',
            fully: true
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

});