import Todo from './todo.js';

export default class Todos {
    constructor(todos) {
        this.todos = todos;
    }

    listTodos(all, active, completed) {
        const todosList = document.getElementById("todolist");
        todosList.innerHTML = "";
        this.renderTodoList(this.todos, todosList, all, active, completed);
        this.countLeftTasks();
    }

    renderTodoList(todoList, parent, all, active, completed) {
        if(all == true){
            todoList.forEach(todo => {
                parent.appendChild(this.renderTodoItem(todo));
                this.countLeftTasks();
            });
        } else if(active == true){
            todoList.forEach(todo => {
                if(todo.completed == false){
                    parent.appendChild(this.renderTodoItem(todo));
                    this.countLeftTasks();
                }
            });
        } else {
            todoList.forEach(todo => {
                if(todo.completed == true){
                    parent.appendChild(this.renderTodoItem(todo));
                    this.countLeftTasks();
                }
            });
        }
    }

    renderTodoItem(todo){
        const li = document.createElement('li');
        if(todo.completed == true){
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            input.setAttribute('checked', true);
            const label = document.createElement('label');
            label.innerHTML = todo.todoName;
            const remBtn = document.createElement('button');
            remBtn.innerHTML = 'X';
            const itemId = document.createElement('input');
            itemId.setAttribute('type', 'hidden');
            itemId.setAttribute('value', `${todo.id}`);

            li.appendChild(input);
            li.appendChild(label);
            li.appendChild(remBtn);
            li.appendChild(itemId);
        } else {
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            const label = document.createElement('label');
            label.innerHTML = todo.todoName;
            const remBtn = document.createElement('button');
            remBtn.innerHTML = 'X';
            const itemId = document.createElement('input');
            itemId.setAttribute('type', 'hidden');
            itemId.setAttribute('value', `${todo.id}`);

            li.appendChild(input);
            li.appendChild(label);
            li.appendChild(remBtn);
            li.appendChild(itemId);
        }
        return li;
    }

    countLeftTasks(){
        let uncompletedTasks = 0;
        for(let i=0;i<this.todos.length;i++){
            if(this.todos[i].completed == false){
                uncompletedTasks++;
            }
        }
        document.getElementById("total").textContent = `${uncompletedTasks} tasks left`;
    }

    addItem(all, active, completed){
        let todoName = document.getElementById("todoValue").value
        if(todoName == ""){
            document.getElementById("message").innerHTML = "Sorry, input cannot be blank. Please, " +
            "specify an item";
        } else {
            document.getElementById("message").innerHTML = "";
            let id = Date.now()            
            let completed = false
            let newTodo = new Todo(id, todoName, completed);
            this.addTodo(newTodo);
            this.listTodos(all, active, completed);
            this.countLeftTasks();
        }
    }

    addTodo(newTodo, all, active, completed) {
        localStorage.setItem("todos", newTodo)
        this.todos.push(newTodo)
        let todosArrayString = JSON.stringify(this.todos)
        localStorage.setItem("todos", todosArrayString)
        this.countLeftTasks();
    }

    completeItem(event, all, active, completed) {
        let itemId = event.target.nextElementSibling.nextElementSibling.nextElementSibling.value;
        for(let i=0;i<this.todos.length;i++){
            if(this.todos[i].id == itemId){
                this.todos[i].completed = (this.todos[i].completed == false) ? true : false;
            }
        }
        let todosArrayString = JSON.stringify(this.todos)
        localStorage.setItem("todos", todosArrayString)
        this.listTodos(all, active, completed);
        this.countLeftTasks();
    }

    removeItem(event, all, active, completed) {
        let deleteItemId = event.target.nextElementSibling.value;
        for(let i=0;i<this.todos.length;i++){
            if(this.todos[i].id == deleteItemId){
                this.todos.splice(i, 1);
                let todosArrayString = JSON.stringify(this.todos);
                localStorage.setItem("todos", todosArrayString)
                this.listTodos(all, active, completed);
                this.countLeftTasks();
            }
        }
    }
}
