//read a value from local storage and parse it as JSON @param {string} key 
//The key under which the value is stored under in LS
//@return {array} The value as an array of objects 
function readFromLS(key) { 
    let todoList = JSON.parse(localStorage.getItem(key));
    return todoList;
}

//write an array of objects to local storage under the provided key @param {string} key 
//The key under which the value is stored under in LS
// @param {array} data The information to be stored as an array of objects. Must be serialized.
function writeToLS(key, data) { 
    localStorage.setItem(key, JSON.stringify(data));
}