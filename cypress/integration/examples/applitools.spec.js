const urls = [
  "https://applitools.com/",
  "https://applitools.com/features",
  "https://applitools.com/root-cause-analysis",
  "https://applitools.com/ultrafast-grid",
  "https://applitools.com/features/test-automation",
  "https://applitools.com/features/frontend-development",
  "https://applitools.com/features/devops",
  "https://applitools.com/features/digital-transformation",
  "https://applitools.com/selenium-ide",
  "https://applitools.com/cypress",
  "https://applitools.com/storybook",
  "https://applitools.com/functional-testing",
  "https://applitools.com/pricing",
  "https://applitools.com/about",
  "https://applitools.com/careers",
  "https://applitools.com/open-source",
  "https://applitools.com/contact",
  "https://applitools.com/resources",
  "https://applitools.com/users/login",
  "https://applitools.com/users/register",
  "https://applitools.com/customers",
  "https://applitools.com/request-demo",
  "https://applitools.com/case-studies/gannett",
  "https://applitools.com/case-studies/concur",
  "https://applitools.com/case-studies/transunion",
  "https://applitools.com/whats-new",
  "https://applitools.com/terms-of-use",
  "https://applitools.com/privacy-policy",
  "https://applitools.com/gdpr",
  "https://applitools.com/helloworld",
  "https://applitools.com/contact/sales/starter",
  "https://applitools.com/contact/sales/enterprise",
  "https://applitools.com/contact/sales/ultrafast",
  "https://applitools.com/contact/sales/start-ups",
  "https://applitools.com/contact/sales",
  "https://applitools.com/about/gil-sever",
  "https://applitools.com/about/adam-carmi",
  "https://applitools.com/about/moshe-milman",
  "https://applitools.com/about/james-lamberti",
  "https://applitools.com/about/jeff-lewis",
  "https://applitools.com/about/yahal-zilka",
  "https://applitools.com/about/tim-guleri",
  "https://applitools.com/about/jim-baum",
  "https://applitools.com/about/bill-macaitis",
  "https://applitools.com/about/bill-lapcevic",
  "https://applitools.com/about/geva-perry",
  "https://applitools.com/about/raffi-margaliot",
  "https://applitools.com/careers/senior-developer-ios",
  "https://applitools.com/careers/product-designer",
  "https://applitools.com/careers/solution-architect",
  "https://applitools.com/careers/software-engineer-developers-platforms-team",
  "https://applitools.com/careers/customer-success-engineer-east-coast-remote",
  "https://applitools.com/careers/sales-development-representative-san-mateo",
  "https://applitools.com/contact/sales/open-source",
  "https://applitools.com/contact/other",
  "https://applitools.com/case-studies/dealertrack",
  "https://applitools.com/case-studies/wix",
  "https://applitools.com/case-studies/walkme",
  "https://applitools.com/case-studies/cloudshare",
  "https://applitools.com/users/forgot-password",
  "https://applitools.com/users/register?view&#x3D;email",
  "https://applitools.com/users/login?",
  "https://applitools.com/request-demo/applitools-eyes-github-integration-how-to-visually-test-every-pull-request",
  "https://applitools.com/users/register/applitools-eyes-github-integration-how-to-visually-test-every-pull-request",
  "https://applitools.com/helloworld2",
  "https://applitools.com/hackathon"
];

describe("Applitools Website vs Staging", () => {
  urls.forEach(url => {
    //staging
     url = url.replace("https://applitools.com", "https://devtst.applitools.com");

    var partialUrl = url.replace("https://applitools.com", "");

    //staging
     partialUrl = partialUrl.replace("https://devtst.applitools.com", "");

    it(`${partialUrl}`, () => {
      cy.visit(url);
      cy.eyesOpen({
        appName: "Applitools.com",
        batchName: "WebsiteAllCombination",
        testName: partialUrl,
        browser: [
          { width: 800, height: 600, name: "firefox" },
          { width: 1024, height: 768, name: "chrome" },
          { width: 1920, height: 1080, name: "chrome" },
          { width: 5120, height: 2880, name: "chrome" }, //large screen
          { width: 1024, height: 768, name: "ie11" },
          { width: 1024, height: 768, name: "ie10" },
          { width: 1024, height: 768, name: "edge" },
          { width: 1024, height: 768, name: "safari" },
          {
            deviceName: "iPhone X",
            screenOrientation: "landscape"
          },
          {
            deviceName: "iPhone X",
            screenOrientation: "portrait"
          },
          {
            deviceName: "Pixel 2 XL",
            screenOrientation: "portrait"
          }
        ]
      });
      cy.eyesCheckWindow(partialUrl);
      cy.eyesClose();
    });
  });
});
