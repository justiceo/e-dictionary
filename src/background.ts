
const how_to_link = 'https://www.wikihow.com/Hang-a-Bear-Bag';
chrome.runtime.onInstalled.addListener((details: chrome.runtime.InstalledDetails) => {
    // On fresh install, open page how to use extension.
    if (details.reason === 'install') {
        chrome.tabs.create({
            url: how_to_link,
            active: true
        });
        return false;
    }
});