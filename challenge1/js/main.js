
import Todos from "./Todos.js";

const todoList = new Todos('ul');
todoList = null;
window.addEventListener("load", () => {
    todoList.listTodos();
});