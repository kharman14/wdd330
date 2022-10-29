import {readFromLS, writeToLS} from "./ls.js";

export default class Todos {
    constructor(elementId) {
        // in the constructor you should set a variable with the element our todo list 
        // will be built in, and the key we will use to read/write from localStorage
    }

    addTodo() {
        //Add a method to the Todos class called addTodo. It should grab the input in the 
        //html where users enter the text of the task, then send that along with the key to a 
        //SaveTodo() function. Then update the display with the current list of tasks
        saveTodo();
    }
}

function saveTodo(task, key) {

}

//A todo should look like this: { id : timestamp, content: string, completed: bool }

//In the Todos.js module, but not in the Todos class create the following function
/* check the contents of todoList, a local variable containing a list of ToDos. If 
it is null then pull the list of todos from localstorage, update the local variable, and return it
@param {string} key The key under which the value is stored under in LS @return {array} 
The value as an array of objects
*/
function getTodos(key) { 

}
