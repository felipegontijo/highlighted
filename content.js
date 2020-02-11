function getUserSelection() {
    let thereIsSelection = window.getSelection ? true : false;
    if (thereIsSelection) {
        return window.getSelection();
    }
}

/* alert user selection -- testing purposes */
alert(getUserSelection());