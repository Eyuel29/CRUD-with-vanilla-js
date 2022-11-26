const input = document.getElementById("input");
const addnew = document.getElementById("todo-add-btn");
const updateIt = document.getElementById("todo-update-btn");

const deleteTodo = document.getElementById("todo-delete");
const updateTodo = document.getElementById("todo-update");

const todoList = document.getElementById("todos-list");

let todoNote = "";
let todoDate = new Date();
let id = 0;
let dateString = todoDate.toDateString();

let AllTodos = {
  todos: [
    {
      ID: 0,
      date: "none",
      task: "none",
    },
  ],
};

let newTodo = {
  date: "",
  task: "",
};

const saveTodo = (date, task) => {
  newTodo = {
    ID: id,
    date: date,
    task: task,
  };
  id++;
  AllTodos.todos.push(newTodo);
};

const reciveTodo = () => {
  todoNote = input.value;
  input.value = "";
};

const changeAdd = () => {
  updateIt.style.display = "none";
  addnew.style.display = "flex";
};

const changeUpdate = () => {
  addnew.style.display = "none";
  updateIt.style.display = "flex";
};

let addTodo = () => {
  reciveTodo();
  if (todoNote != "") {
    todoList.innerHTML += `<div class="todo">
    <div class="new-todo">
    <div class="todo-date">${dateString}</div>
        <div class="todo-content">${todoNote}</div>
        <div class="todo-options">
            <div class="todo-update" id="todo-update">UPDATE</div>
            <div class="todo-delete" id="todo-delete">DELETE</div>
        </div>
    </div>
</div>`;
    saveTodo(dateString, todoNote);
    todoNote = "";
  } else {
    window.alert("no task added!");
  }
};

let i = 1;

addnew.addEventListener("click", () => {
  addTodo();
  console.log(AllTodos.todos[i]);
  i++;
});

updateTodo.addEventListener("click", () => {
  changeUpdate();
});
updateIt.addEventListener("click", () => {
  changeAdd();
});


