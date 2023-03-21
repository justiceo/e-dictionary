// If not using this component, remove "tabs" permission.

// Automatically disable icon on webstore and new tab pages.
chrome.tabs.onUpdated.addListener((tabId, changeInfo, _tab) => {
  chrome.tabs.get(tabId, (tab) => updateIcon(tab.url));
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => updateIcon(tab.url));
});
const updateIcon = (url?: string) => {
  const icon =
    !url ||
    !url.trim() ||
    url.indexOf("chrome-extension://") > 0 ||
    url.indexOf("chrome://newtab/") > 0 ||
    url.indexOf("chrome.google.com/webstore") > 0
      ? "assets/logo-gray-128x128.png"
      : "assets/logo-128x128.png";
  chrome.action.setIcon({ path: chrome.runtime.getURL(icon) });
};
