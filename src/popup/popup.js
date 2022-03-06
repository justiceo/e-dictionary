document.querySelector('#go-to-options').addEventListener('click', function () {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('options.html'));
    }
});

document.querySelector('#reload-extension').addEventListener('click', function () {
    chrome.runtime.reload();
});