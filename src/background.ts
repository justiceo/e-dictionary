
const how_to_link = 'https://docs.google.com/document/d/1pobtU3ZX0eJkMGXBa0dcH8LkJB3jRFt31dZwY3ozeLM';
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