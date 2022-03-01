# ![logo](assets/images/icon-24x24.png) Browser Extension Starter

[![Build Status](https://travis-ci.org/justiceo/chrome-extension-starter.svg?branch=master)](https://travis-ci.org/justiceo/chrome-extension-starter)

Chrome and Firefox extension starter kit (boilerplate) for Typescript development with Gulp and E2E tests

### Features
* **Typescript to Js**: Write your entire chrome extension in Typescript and have it transpiled to JavaScript.
* **E2E extension test**: Start up a chrome browser with your extension installed, write your tests in Jasmine.
* **Generate extension icons**: Forget the pain of generating icons of different size to meet icons requirements.

### Dev Flow

1. Download the repo and install dependencies (there are only dev dependencies)
```
git clone http://github.com/justiceo/xtension 
cd xtension  && npm install  
```

2. Generate extension icons (copy high-res icon to assets/images/icon.png)
```
gulp generateIcons
```

3. Watch for changes in src/ and assets/ and update xtension/extension directory
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


### Customizing

You need
1. An icon, preferably PNG as it scales better.
2. A Github repository.
3. A name for your extension.

### Pre-Publish

* The "management" permission in the manifest is only necessary to enable easy-reloading of the extension. Feel free to remove before publishing.


### Ref

1. http://www.adambarth.com/experimental/crx/docs/manifest.html
2. https://developer.chrome.com/extensions/manifest
