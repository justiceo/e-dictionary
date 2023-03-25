# ![logo](src/assets/logo-24x24.png) Browser Extension Starter

[![Xtension](https://circleci.com/gh/justiceo/xtension/tree/main.svg?style=svg)](https://circleci.com/gh/justiceo/xtension/?branch=main)

Browser extension example. Typescript, E2E tests, icon generation, automatic i18n and ESBuild

![Screenshot](src/assets/screenshot.png "Screenshot")

## Downloads
<table cellspacing="0" cellpadding="0">
  <tr style="text-align: center">
    <td valign="center">
      <a align="center" href="https://chrome.google.com/webstore/">
        <img src="src/assets/browser-chrome.png" alt="Chrome web store" width="50" />
        <p align="center">Chrome Web Store</p>
      </a>
    </td>
    <td valign="center">
      <a href="https://addons.mozilla.org/firefox/extensions/">
        <img src="src/assets/browser-firefox.png" alt="Firefox add-ons" width="50" />
        <p align="center">Firefox Add-ons</p>
      </a>
    </td>
        <td valign="center">
      <a href="https://addons.opera.com/en/extensions/">
        <img src="src/assets/browser-opera.png" alt="Opera add-ons" width="50"/>
        <p align="center">Opera Add-ons</p>
      </a>
    </td>
        <td valign="center">
      <a href="https://microsoftedge.microsoft.com/addons">
        <img src="src/assets/browser-ms-edge.png" alt="MS Edge add-ons" width="50" />
        <p align="center">Ms Edge Add-ons</p>
      </a>
    </td>
        <td valign="center">
      <a href="https://apps.apple.com/app/apple-store/">
        <img src="src/assets/browser-safari.png" alt="Safari add-ons" width="50" />
        <p align="center">Safari Extensions</p>
      </a>
    </td>
  </tr>
</table>

## Features

* Privacy-friendly.
* Highly configurable options page.
* Disable for specific sites.
* Sync settings across browsers.

## Project setup

```bash
# Install dependencies
npm install

# Build extension for development, watch for file changes and rebuild.
npm run build
npm run watch

# Generate compliant images assets for logo (default logo location src/assets/logo.png)
npm run generateIcons

# Translate app strings to all supported chrome locales
npm run translate

# Start an instance of Chromium with extension installed (using puppeteer)
# For Firefox, pass --browser=firefox as argument.
npm run build start 

# Build and package extension into a store-ready upload
node tools/esbuild.js build --prod 

# Create extension package for Firefox/Opera/Edge by specifying --browser argument
node tools/esbuild.js build --prod  --browser=firefox

# Run tests
npm run test
```

### Install Locally

#### Chrome
1. Open chrome and navigate to extensions page using this URL: chrome://extensions.
2. Enable the "Developer mode".
3. Click "Load unpacked extension" button, browse the `build/chrome-dev` directory and select it.

### Firefox
1. Open firefox and navigate to `about:debugging#/runtime/this-firefox`.
2. Click the "Load Temporary Add-on" button.
3. Browse the `build/firefox-dev` directory and select the `manifest.json` file.

<br>
<br>


############# DEV README ##############

### Features
* **Automatic Github Pages generation**: Files added in the `gh-pages` sub-directory are branched to create a Github page automatically. This is useful for static pages like help, welcome and feedback pages.
* **Typescript to Js**: Write your entire chrome extension in Typescript and have it transpiled to JavaScript.
* **E2E extension test**: Start up a chrome browser with your extension installed, write your tests in Jasmine.
* **Generate extension icons**: Forget the pain of generating icons of different size to meet icons requirements.
* **Manifest V3 Compatible**: Easier submission to the Chrome Webstore.
* **Automatic translation**: The messages for all supported i18n locales are auto-generated from the English version.
* **Zero Dependencies**: This starter is minimal to avoid [supply-chain attacks](https://www.bleepingcomputer.com/news/security/npm-supply-chain-attack-impacts-hundreds-of-websites-and-apps/) which is rampant with Js projects.
* **Welcome and Uninstall pages**: To give your project a head start, welcome pages are great for demos and uninstall pages provide a thoughtful exit.
* **Utilities for common tasks**: Comes with helpers logging, storage, and requesting feedback.

### Notes

1. E2E testing with Firefox.

By default, puppeteer only downloads Chromium, run the command below to install Firefox's equivalent of chromium:

```
PUPPETEER_PRODUCT=firefox npm i -D puppeteer --prefix ./node_modules/firefox-puppeteer
```


`PUPPETEER_PRODUCT=firefox` tells puppeteer to download firefox.

`--prefix ./node_modules/firefox-puppeteer` forces a new fetch of puppeteer. This is necessary since `node_modules/puppeteer` already exists (for chromium). The actual value of the prefix doesn't matter, just don't overwrite an actual package. 

*NB:* After running the above command, they will no be update to package.json or package-lock.json... since package "puppeteer" already exists.


### Examples of chrome extensions for inspirations
1. https://github.com/mdn/webextensions-examples
2. https://github.com/orbitbot/chrome-extensions-examples


### Keeping up with changes.
Staying up-to-date with this repo after a fork:
1. Create a new repository by either forking/copying this one.
2. Add this repository as a remote to the new repo
`git remote add xtension git@github.com:justiceo/xtension.git`
3. Fetch the latest updates from the xtension repo (template).
`git fetch xtension`
4. Create a local branch to track xtension repo.
`git checkout -B xtension && git branch -u xtension/master`
5. There should be two divergent histories now. `master -> origin/master` and `xtension -> xtension/master`.
6. Copy the changes from xtension to master without a commit.
`git checkout xtension -- .` 
7. Fix any changes then commit
`git commit -m "merged updates from xtension"`.

