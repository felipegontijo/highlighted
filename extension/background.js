chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const currentTab = tabs[0];
            const url = currentTab.url;
            const title = currentTab.title;
            const data = {
                url: url,
                title: title,
                content: message.content
            }
            alert(data);
            fetch('https://7508dbf9-7f34-4968-93fb-6d26f76a00b6.mock.pstmn.io/api/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(response => sendResponse(response))
            .catch(error => console.log('Error:', error));
            return true;
        })
    }
)


// const apiUrl = 'http://localhost:3000/api/add';