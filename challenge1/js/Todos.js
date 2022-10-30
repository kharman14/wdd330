import {readFromLS, writeToLS} from "./ls.js";
import {qs, onTouch} from "./utilities.js";

export default class Todos {
    constructor(elementId) {
        this.parentElement = document.qs(elementId);
        this.key = 'todoList';
    }

    addTodo() {
        //Add a method to the Todos class called addTodo. It should grab the input in the 
        //html where users enter the text of the task, then send that along with the key to a 
        //SaveTodo() function. Then update the display with the current list of tasks
        let newTask = qs('#item').value;
        saveTodo(newTask, this.key);
        this.listTodos();
    }

    listTodos() {
        // It should use the renderTodoList function to output our todo list when called.
        //It should get called when a todo is added, or removed, and when the Todos class is instantiated.
        renderTodoList(getTodos(this.key), this.parentElement);
    }

    completeTodo() {
        // set completed: true on a single todo in the todoList array
    }

    removeTodo() {
        // Remove a task from the list and local storage
        let removeTask = document.qs($(this)).value;
        todoList.filter((item) => {
            if (item != removeTask) {
                return item;
            }
        })
        writeToLS(this.key, todoList);
        this.listTodos();
    }

    filterTodo() {
        // Filter by 
    }
}

//In the Todo.js module, but not in the Todos class, create the following function
// build a todo object, add it to the todoList, and save the new list to local storage.
function saveTodo(task, key) {
    let date = new Date();
    let todo = {'id': date, 'content': task, 'completed': false};
    todoList.push(todo);
    writeToLS(key, todoList);
}

/* check the contents of todoList, a local variable containing a list of ToDos. If 
it is null then pull the list of todos from localstorage, update the local variable, and return it
@param {string} key The key under which the value is stored under in LS 
@return {array} The value as an array of objects
*/
function getTodos(key) { 
    if (todoList == null){
        todoList = readFromLS(key);
        return todoList;
    }     
}

function renderTodoList(list, element) {
    list.foreach((todo) => {
            let li = document.createElement('li');
            let checkbox = document.createElement('input');
            let label = document.createElement('label');
            let button = document.createElement('button');

            checkbox.setAttribute('type', 'checkbox');
            label.innerHTML = todo;
            button.innerHTML = 'X';
            button.setAttribute('onclick', onTouch('button', removeTodo()));

            li.appendChild(checkbox);
            li.appendChild(label);
            li.appendChild(button);
            element.appendChild(li);
        }
    )
}
