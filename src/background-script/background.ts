
const uninstallUrl = 'https://justiceo.github.io/xtension/uninstall.html';
const welcomeUrl = 'https://www.youtube.com/watch?v=k1BneeJTDcU';
chrome.runtime.onInstalled.addListener((details: chrome.runtime.InstalledDetails) => {
    // On fresh install, open page how to use extension.
    if (details.reason === 'install') {
        chrome.tabs.create({
            url: welcomeUrl,
            active: true
        });
        return false;
    }

    // Set url to take users upon uninstall.
    chrome.runtime.setUninstallURL(uninstallUrl, () => {
        if(chrome.runtime.lastError) {
            console.error("Error setting uninstall URL", chrome.runtime.lastError);
        }
    });
});