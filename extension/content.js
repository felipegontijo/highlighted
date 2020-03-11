let selection = '';

document.addEventListener('mouseup', () => {
    console.log('mouse event seen');
    selection = window.getSelection().toString();
    console.log(selection.length)
    if (selection.length) {
        console.log(selection);
        chrome.runtime.sendMessage({content: selection}, (response) => {
            console.log(response);
        })
    }
})
