# ![logo](src/assets/logo-24x24.png) Browser Extension Starter

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
node tools/esbuild watch

# Generate compliant images assets for logo (default logo location src/assets/logo.png)
node tools/esbuild generateIcons

# Translate app strings to all supported chrome locales
node tools/esbuild translate

# Start an instance of Chromium with extension installed (using puppeteer)
# For Firefox, pass --browser=firefox as argument.
node tools/esbuild start 

# Build and package extension into a store-ready upload
node tools/esbuild --prod 

# Create extension package for Firefox/Opera/Edge by specifying --browser argument
node tools/esbuild --prod --browser=firefox

# Run tests
node tools/esbuild test
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

#######################################

############# DEV README ##############

#######################################


Chrome, Firefox, Opera and Edge browser extension starter kit (boilerplate) for Typescript development with ESBuild and E2E tests.

The earlier version of the template used gulp, you can see this version in the "v1-gulp" branch of this repository.

### Features
* **Automatic Github Pages generation**: Files added in the `gh-pages` sub-directory are branched to create a Github page automatically. This is useful for static pages like help, welcome and feedback pages.
* **Typescript to Js**: Write your entire chrome extension in Typescript and have it transpiled to JavaScript.
* **E2E extension test**: Start up a chrome browser with your extension installed, write your tests in Jasmine.
* **Generate extension icons**: Forget the pain of generating icons of different size to meet icons requirements.
* **Manifest V3 Compatible**: Easier submission to the Chrome Webstore.
* **Uninstall Feedback page**: Boostrap form with data saved to Google sheets via Google forms.

### Dev Flow

1. Download the repo and install dependencies (there are only dev dependencies)
```
git clone http://github.com/justiceo/xtension 
cd xtension  && npm install  
```

2. Install Firefox for Puppeteer.

By default, puppeteer only downloads Chromium, run the command below to install Firefox's equivalent of chromium:

```
PUPPETEER_PRODUCT=firefox npm i -D puppeteer --prefix ./node_modules/firefox-puppeteer
```

`PUPPETEER_PRODUCT=firefox` tells puppeteer to download firefox.

`--prefix ./node_modules/firefox-puppeteer` forces a new fetch of puppeteer. This is necessary since `node_modules/puppeteer` already exists (for chromium). The actual value of the prefix doesn't matter, just don't overwrite an actual package. 

*NB:* After running the above command, they will no be update to package.json or package-lock.json... since package "puppeteer" already exists.

3. Generate extension icons, manifest, scripts and other files
```
node index.js
```

Open chrome://extensions and load the extension directory `build/chrome-dev` as an unpacked chrome extension.
See how to [load an unpacked extension](https://developer.chrome.com/extensions/getstarted#manifest) in chrome.

4. Run tests: the command below installs your extension in a browser and performs E2E tests.
```
node index.js test
```

To test against firefox, use:
```
node index.js test --browser=firefox
```

5. To generate prod builds for different browsers, specify the PROD and BROWSER environment variables, e.g.
```
node index.js --prod --browser=chrome
```

This would create the prod directory `build/chrome-prod` and a zip file `build/chrome-prod.zip`, which you can upload to the chrome webstore.

6. You can also start a new browser instance with only the extension installed:

```
npm run start:chrome    # for Chrome
npm run start:firefox   # for Firefox
```

### Examples of chrome extensions for inspirations
1. https://github.com/mdn/webextensions-examples
2. https://github.com/orbitbot/chrome-extensions-examples


### Keeping up with changes.
#### Staying up-to-date with this repo after a fork:
1. Click "Use template", the experience might be better than "fork"ing it. With template, you would create a new repositories without history.
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


#### Pushing changes upstream to the template after a fork:
1. Go through steps 1-5 in the above steps.
2. Copy the specific files you want from master to xtension. U
`git checkout master -- <path/to/file>`
3. Make changes in xtension and commit. Push to xtension/master.

## Refs
- Add rating form - https://codepen.io/camto28/pen/MOyEvp, more at https://keep.google.com/#NOTE/1grL0UTeVn2rT0u11XuYr0d3pVJCehzi3U6divenVK5mqLJSkLKiLSaDO_byF6vs
