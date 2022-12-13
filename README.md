# ![logo](src/assets/icon.png) Browser Extension Starter

[![Build Status](https://travis-ci.org/justiceo/chrome-extension-starter.svg?branch=master)](https://travis-ci.org/justiceo/chrome-extension-starter)

Chrome and Firefox extension starter kit (boilerplate) for Typescript development with Gulp and E2E tests

### Features
* **Automatic Github Pages generation**: Files added in the `gh-pages` sub-directory are branched to create a Github page automatically. This is useful for static pages like help, welcome and feedback pages.
* **Typescript to Js**: Write your entire chrome extension in Typescript and have it transpiled to JavaScript.
* **E2E extension test**: Start up a chrome browser with your extension installed, write your tests in Jasmine.
* **Generate extension icons**: Forget the pain of generating icons of different size to meet icons requirements.
* **Automatic Deployment**: Either using a Github action or Shipit.
* **Crash reporting**: See uncaught exceptions in Sentry.io.
* **Manifest V3 Compatible**: Easier submission to the Chrome Webstore.
* **Uninstall Feedback page**: Boostrap form with data saved to Google sheets via Google forms.

### Dev Flow

1. Download the repo and install dependencies (there are only dev dependencies)
```
git clone http://github.com/justiceo/xtension 
cd xtension  && npm install  
```

2. Generate extension icons (copy high-res icon to assets/images/icon.png)
```
node generateIcons.js
```

3. Watch for changes in src/ and assets/ and update xtension/extension directory
```
node build.js
```
Open chrome://extensions and load the extension directory as an unpacked chrome extension.

Extension directory would be in write-better/extension. See how to [load an unpacked extension](https://developer.chrome.com/extensions/getstarted#manifest) in chrome.

4. Or load directory in a custom browser instance

```
npm run start:chrome    # for Chrome
npm run start:firefox   # for Firefox
```

5. Prepare a marketplace release, generates a .zip file of extension in `/dist` sub-directory.
```
gulp Pack 
```


### Ref

1. http://www.adambarth.com/experimental/crx/docs/manifest.html
2. https://developer.chrome.com/extensions/manifest

### Example Code
1. https://github.com/mdn/webextensions-examples
2. https://github.com/orbitbot/chrome-extensions-examples


### Staying up-to-date with this repo after a fork:
1. Click "Use template", don't fork it. It would create a new repositories without history.
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


### Pushing changes upstream to the template after a fork:
1. Go through steps 1-5 in the above steps.
2. Copy the specific files you want from master to xtension. U
`git checkout master -- <path/to/file>`
3. Make changes in xtension and commit. Push to xtension/master.