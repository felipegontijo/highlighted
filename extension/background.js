/* execute content script when extension clicked */
chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.executeScript({file: 'content.js'});
});