/* get user selection */
function getSelectionText() {
    if (window.getSelection) {
        return window.getSelection();
    }
}

/* alert user selection -- testing purposes */
alert(getSelectionText());