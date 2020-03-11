let selection = '';

document.addEventListener('mouseup', () => {
    console.log('mouse event seen');
    selection = window.getSelection().toString();
    console.log(selection.length)
    if (selection.length) {
        console.log(selection);
        chrome.runtime.sendMessage({content: selection}, (response) => {
            // if (response != undefined && response != "") {
            //     console.log(response);
            // }
            // else {
            //     console.log(null);
            // }
            console.log(response);
        })
    }
})
