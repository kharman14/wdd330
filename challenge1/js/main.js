
import Todos from "./Todos.js";
import todos from "./todo-list.js";

const todoList = new Todos(todos);
var all = true;
var active = false;
var completed = false;


//When window loads grab and show ToDo List
window.addEventListener("load", () => {
    todoList.listTodos(all, active, completed);
    document.getElementById("mode").children[0].style.color = "blue";
});

document.getElementById("mode").addEventListener("click", () => {
    event.target.classList.toggle('active');
    if(event.target.textContent == "All"){
        event.target.style.color = "blue";
        event.target.nextElementSibling.style.color = "black";
        event.target.nextSibling.nextElementSibling.nextElementSibling.style.color = "black";
        all = true;
        active = false;
        completed = false;
        todoList.listTodos(all, active, completed);
    } else if(event.target.textContent == "Active"){
        event.target.previousElementSibling.style.color = "black";
        event.target.style.color = "blue"
        event.target.nextElementSibling.style.color = "black";
        all = false;
        active = true;
        completed = false;
        todoList.listTodos(all, active, completed);
    } else {
        event.target.previousElementSibling.previousElementSibling.style.color = "black";
        event.target.previousElementSibling.style.color = "black";
        event.target.style.color = "blue"
        all = false;
        active = false;
        completed = true;
        todoList.listTodos(all, active, completed);
    }           
});

document.getElementById("addBtn").addEventListener("click", () => {
    todoList.addItem(all, active, completed);            
});

document.getElementById("todolist").addEventListener("click", (event) => {            
    todoList.completeItem(event, all, active, completed);            
});

document.getElementById("todolist").addEventListener("click", (event) => {            
    todoList.removeItem(event, all, active, completed);            
});
