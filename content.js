function getUserSelection() {
    let isSelected = window.getSelection ? true : false;
    if (isSelected) {
        return window.getSelection();
    }
}

/* testing purposes */
alert(getUserSelection());