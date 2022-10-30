
export function qs(selector) { 
    let element = document.querySelector(selector);
    return element;
}

export function onTouch(elementSelector, callback) { 
    let element = document.querySelector(elementSelector);
    element.addEventListener('touchend', callback);
}