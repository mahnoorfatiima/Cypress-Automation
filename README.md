# Cypress-Automation
Basic Template for Cypress Automation Tests in Javascript

This open-source project was created during discovery of best-fit tool for Icon web application
<div align="center">
  <img src="https://www.perfecto.io/sites/default/files/image/2022-09/social-blog-cypress-vs-playwright.jpg"><br>
</div>

## Key Findings

* **Speed Comparison:** Cypress took ~58s, ~54s, ~54s  to run all 3 tests and averaged ~55 seconds (slower than Playwright)

* **Test Framework:** Cypress is considered more of a “package offering” when compared to Playwright, as it generates a folder system with example files which can assist testing teams, though testers must work within the confines of the existing test runner framework.

* **Additional Downloads:** In cypress you have to download a plugin for different components. To support iframes you have to download following
 ```npm install -D cypress-iframe```  

* **Test Recording:** Similarly to record and play you have to enable an additional cypress component. Cypress Studio does not support writing tests that use domains of multiple origins

* **Navigating to new Domain:** Cypress provides recipes to open pages from external domain however you need to set ```chromeWebSecurity``` to false in order to run them. But there is no alternative for firefox, cross-domain tests would fail in Firefox
