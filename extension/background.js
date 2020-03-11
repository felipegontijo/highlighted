// const getTabInfo = () => {
//     chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//         const currentTab = tabs[0];
//         const url = currentTab.url;
//         const title = currentTab.title;
//         return {
//             url,
//             title
//         }
//     })
// }

chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
        alert(message.content);
        fetch('https://7508dbf9-7f34-4968-93fb-6d26f76a00b6.mock.pstmn.io/api/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain; charset=UTF-8'
        },
        body: message.content
    })
    // .then(response => response)
    .then(response => sendResponse(response))
    .catch(error => console.log('Error:', error));
    return true;
    }
);


// const apiUrl = 'http://localhost:3000/api/add';