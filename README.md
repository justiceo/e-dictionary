# ![logo](assets/images/icon-24x24.png) Chrome Extension Starter

[![Build Status](https://travis-ci.org/justiceo/chrome-extension-starter.svg?branch=master)](https://travis-ci.org/justiceo/chrome-extension-starter)

Chrome extension starter kit (boilerplate) for Typescript development, Gulp and E2E tests

### Features
* **Typescript to Js**: Write your entire chrome extension in Typescript and have it transpiled to JavaScript.
* **E2E extension test**: Start up a chrome browser with your extension installed, write your tests in Jasmine.
* **Generate extension icons**: Forget the pain of generating icons of different size to meet icons requirements.

### Build the extension locally
```
# download the repo
git clone http://github.com/justiceo/chrome-extension-starter 
# install dependencies 
cd chrome-extension-starter  && npm install  
# create an installable extension directory                    
gulp build
# create a release       
git checkout release
git rebase master
gulp clean
gulp build
zip -r extension.zip extension -x "*.DS_Store"
```

Extension directory would be in write-better/extension. See how to [load an unpacked extension](https://developer.chrome.com/extensions/getstarted#manifest) in chrome.
