const input = document.getElementById('input');
const addnew = document.getElementById('todo-add-btn');
const updateIt = document.getElementById('todo-update-btn');

const deleteTodo = document.getElementById('todo-delete');
const updateTodo = document.getElementById('todo-update');

const todoList = document.getElementById('todos-list');

let todoNote = "";

let todoDate = new Date();



let AllTodos = {
    todos : [
        {
        "ID" : 1,
        "date":"10/12/12",
        "task":"do"        
        }
    ]
}

let newTodo = {
    "ID" : 2,
    "date":"10/12/12",
    "task":"do it now"        
}

console.log(AllTodos);


// console.log(AllTodos.todos.push(newTodo));
AllTodos.todos.push(newTodo);

console.log(AllTodos);

const reciveTodo = () =>{
    todoNote = input.value;
    input.value = "";
}

const changeAdd = () =>{
    updateIt.style.display = "none";
    addnew.style.display = "flex";
}
const changeUpdate = () =>{
    addnew.style.display = "none";
    updateIt.style.display = "flex";
}

let addtodo = () => {
    reciveTodo();
 if ( todoNote != "" ) {
    todoList.innerHTML += `<div class="todo">
    <div class="new-todo">
    <div class="todo-date">${todoDate.toDateString()}</div>
        <div class="todo-content">${todoNote}</div>
        <div class="todo-options">
            <div class="todo-update" id="todo-update">UPDATE</div>
            <div class="todo-delete" id="todo-delete">DELETE</div>
        </div>
    </div>
</div>`
    todoNote = "";
}else{
    window.alert("no task added!");
}
}

addnew.addEventListener('click',addtodo);


updateTodo.addEventListener('click',()=>{
    changeUpdate();
});
updateIt.addEventListener('click',()=>{
    changeAdd();
})

updtodo.addEventListener('click',()=>{
    changeUpdate();
});