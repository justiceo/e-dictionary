## ![logo](images/logo-24x24.png) Browser Extension Starter

Browser extension example. Typescript, E2E tests, icon generation, automatic i18n and ESBuild.

## Browser Support
<p style="vertical-align:middle; display:flex"><img style="width:25px" src="images/browser-chrome.png" />&nbsp; Chrome -> &nbsp;<b>Supported</b></p>
<p style="vertical-align:middle; display:flex"><img style="width:25px"  src="images/browser-firefox.png" />&nbsp; Firefox -> &nbsp;<b>Supported</b>&nbsp;</p>
<p style="vertical-align:middle; display:flex"><img style="width:25px"  src="images/browser-opera.png" />&nbsp; Opera -> &nbsp;<b>Supported</b></p>
<p style="vertical-align:middle; display:flex"><img style="width:25px"  src="images/browser-ms-edge.png" />&nbsp; Edge -> &nbsp;<b>Supported</b></p>
<p style="vertical-align:middle; display:flex"><img style="width:25px"  src="images/browser-brave.png" />&nbsp; Brave -> &nbsp;<b>Supported</b></p>
<p style="vertical-align:middle; display:flex"><img style="width:25px"  src="images/browser-safari.png" />&nbsp; Safari -> &nbsp;<b>Not Supported</b></p>

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