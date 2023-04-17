import inboxHeader from "./Inbox/inboxHeader.js"
import addTask from "./Inbox/addTask.js";

let taskList = [];
console.log("reeeee");
inboxHeader();


function addNewTask(task) {
    taskList.push(task);
    console.log({taskList});
  }
  
  addTask(addNewTask);


// add task button 
// event listener for that
// pops the dialogue from add task. 
// button form click takes from task
// appends new task 

