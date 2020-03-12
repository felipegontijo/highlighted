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
            fetch('http://localhost:3000/api/add', {
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