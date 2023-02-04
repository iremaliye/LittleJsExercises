
const button = document.querySelector("#toastButton");
const list = document.querySelector("#list");
const liveToast = document.querySelector("#toastLive");

const allList = document.querySelectorAll("list")
eventListener();
function eventListener() {
    list.addEventListener("click", listFunction)
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
}
function loadAllTodosToUI(){
    let task = getTodosFromStorage();
    task.forEach(function(setTask){
        addTodoUi(setTask);
    })

}
function listFunction(e) {
    if (e.target.className === "close") {
        e.target.parentElement.remove();
        deleteToDoStorage(e.target.parentElement.firstChild.nodeValue); 
        
    }
    else if (e.target.className === "toDoItem") {
        e.target.className = "Todo";
        const checkItem = document.createElement("i");
        checkItem.className = "control";
        e.target.appendChild(checkItem);

    }
    else if (e.target.className === "Todo") {
        e.target.className = "toDoItem";
        e.target.children[1].remove();
    }

}
function getTodosFromStorage(){
    let task;
    if(localStorage.getItem("task")===null){
        task =[];
    }
    else{
        task = JSON.parse(localStorage.getItem("task"))
    }
    return task;

}

function addToDoToStorage(setTask){
    
let localStorageTask = getTodosFromStorage();
localStorageTask.push(setTask);
localStorage.setItem("task", JSON.stringify(localStorageTask));

}

function deleteToDoStorage(deleteTask){
 let siltask = getTodosFromStorage();
 siltask.forEach (function(task,index){
 if(task == deleteTask){
   siltask.splice(index,1);
 }


 });
console.log(siltask);
 localStorage.setItem("task", JSON.stringify(siltask));

 }




function newElement() {
    const task = document.querySelector("#task");

    
    if (task.value.trim() == "") {
        showToast(false);

    }
    else if (!task.value == "") {
        addTodoUi(task.value);
        showToast(true);
        addToDoToStorage(task.value);
        task.value = "";
    }
}

function addTodoUi(task){
    const listElement = document.createElement("list");
    const spanElement = document.createElement("span");
    listElement.className = "toDoItem";
    spanElement.className = "close";
    spanElement.innerText = "x";
    listElement.innerText = task.trim();
    listElement.appendChild(spanElement);
    list.appendChild(listElement);
}

function showToast(sonuc) {
    if (sonuc == false) {
        $(".error").toast("show");
    }
    else {
        $(".success").toast("show");
        

    }

}
