// get text selected by the user
function getSelectionText() {
    let text = "";
    let activeEl = document.activeElement;
    let activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
    if (
      (activeElTagName == "textarea") || (activeElTagName == "input" &&
      /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
      (typeof activeEl.selectionStart == "number")
    ) {
        text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
    } else if (window.getSelection) {
        text = window.getSelection().toString();
    }
    return text;
}

// alerts text selected -- testing purposes
document.onmouseup = document.onkeyup = document.onselectionchange = () => {
    alert(getSelectionText());
  };