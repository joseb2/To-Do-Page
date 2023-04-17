// index.js
import inboxHeader from "./Inbox/inboxHeader.js";
import addTask from "./Inbox/addTask.js";
import Task from "./Inbox/task.js"

const taskList = [];

inboxHeader();
addTask(addNewTask);

function addNewTask(task) {
  taskList.push(task);
  console.log({ taskList });

taskList.forEach(task => {
  console.log(task);
}); 

}
