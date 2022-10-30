
import Todos from "./Todos.js";

const todoList = new Todos('ul');
window.addEventListener("load", () => {
    todoList.listTodos();
});