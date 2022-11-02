let todos;
let storedTodos = localStorage.getItem("todos")
    if(storedTodos == null){
        todos = []
    } else {
        todos = JSON.parse(storedTodos)
        console.log("memory start");
        console.log( todos);
        console.log("memory end");
    }

export default todos;