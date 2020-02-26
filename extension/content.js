function getUserSelection() {
    let isSelected = window.getSelection ? true : false;
    if (isSelected) {
        return window.getSelection();
    }
}

function getTabTitle() {
    const tabUrl = '';
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        tabUrl = tabs[0].url;     //url
    });
    return tabUrl;
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log('error', error);
    }
}