# Applitools Tutorial - Cypress

## Pre-Requisites
* Install Node.js from [here](https://nodejs.org/en/)

## Run the Example Project
1. Download the example
    * Option 1: `git clone https://github.com/applitools/tutorial-cypress.git`
    * Option 2: Download it as a Zip file and extract it
2. CD into the `tutorial-cypress` folder
3. Set up environment variable `APPLITOOLS_API_KEY` with your own API key.
    * Login to Applitools > Click on the Person icon > My API Key
    * Linux/Mac: export APPLITOOLS_API_KEY=<your_key>
    * Windows: set APPLITOOLS_API_KEY=<your_key>
4. run `npm install`
5. run `npx eyes-setup`
6. run `npm test`

## Add Applitools Eyes to an Existing Node.js Project

Install the Applitools Eyes Cypress SDK:

```
npm install @applitools/eyes-cypress --save-dev
```

Follow along with the example in this repository for adding Applitools Eyes along with your existing tests.

## GitHub Action CI/CD Example

This repository includes an example of how you can integrate Applitools Eyes into your CI/CD process whether with GitHub Actions or a variety of other tools:

https://github.com/applitools/tutorial-cypress/blob/master/.github/workflows/test.yml

## Cypress SDK Tutorial

Find the tutorial at: https://applitools.com/tutorials/cypress.html

## More Information
* https://www.npmjs.com/package/@applitools/eyes-cypress
* https://applitools.com/docs/api/eyes-sdk/indexm/classindex-cypress-javascript.html
