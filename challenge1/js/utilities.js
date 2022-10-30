
function qs(selector) { 
    let element = document.querySelector(selector);
    return element;
}

function onTouch(elementSelector, callback) { 
    elementSelector.addEventListener('touchend click', callback);
}