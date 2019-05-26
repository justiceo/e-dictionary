# ![logo](assets/images/icon-24x24.png) Chrome Extension Starter

[![Build Status](https://travis-ci.org/justiceo/chrome-extension-starter.svg?branch=master)](https://travis-ci.org/justiceo/chrome-extension-starter)

Chrome extension starter kit (boilerplate) for Typescript development, Gulp and E2E tests

### Features
* **Typescript to Js**: Write your entire chrome extension in Typescript and have it transpiled to JavaScript.
* **E2E extension test**: Start up a chrome browser with your extension installed, write your tests in Jasmine.
* **Generate extension icons**: Forget the pain of generating icons of different size to meet icons requirements.

### Dev Flow

1. Download the repo and install dependencies (there are only dev dependencies)
```
git clone http://github.com/justiceo/chrome-extension-starter 
cd chrome-extension-starter  && npm install  
```

2. Generate extension icons (copy high-res icon to assets/images/icon.png)
```
gulp generateIcons
```

3. Watch for changes in src/ and assets/ and update chrome-extension-starter/extension directory
```
gulp
```
Open chrome://extensions and load the extension directory as an unpacked chrome extension.

4. Prepare a chrome marketplace release
```
gulp clean              
gulp build
zip -r extension.zip extension
```

Extension directory would be in write-better/extension. See how to [load an unpacked extension](https://developer.chrome.com/extensions/getstarted#manifest) in chrome.


### Ref

1. http://www.adambarth.com/experimental/crx/docs/manifest.html
2. https://developer.chrome.com/extensions/manifest
