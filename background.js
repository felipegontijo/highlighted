/* execute content script when extension clicked */
chrome.browserAction.onClicked.addListener(() => {
    alert('Executing content script...');
    chrome.tabs.executeScript({file: 'content.js'});
});