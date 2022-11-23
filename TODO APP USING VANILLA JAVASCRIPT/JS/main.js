let thedate = new Date();

let AllTodos = {
    todos : [
        {
        "ID" : 0,
        "date":"10/12/12",
        "task":"do"        
        }
    ]
}

let newTodo = {
    "ID" : null,
    "date":"",
    "task":""        
}

let id = 1;


const addTodo = (x,y) =>{
    newTodo = {
        "ID" : id,
        "date": x,
        "task": y        
    }   
    id++;
    AllTodos.todos.push(newTodo);
}


let date = thedate.toDateString();
let task = "do it now";

addTodo(date,task);


task = "just do it";
date = thedate.toDateString();

addTodo(date,task);


task = "I said do it";
date = thedate.toDateString();

addTodo(date,task);


task = "would you do it?";
date = thedate.toDateString();

addTodo(date,task);

for (let i = 1; i < AllTodos.todos.length; i++) {
    console.log(AllTodos.todos[i]);
}