import Task from "./task.js"

export default function addTask(callback) { 
  const content = document.getElementById("content"); 
  const addTaskDiv = document.createElement("div");

  addTaskDiv.textContent = "+ Add Task";
  content.append(addTaskDiv); 

  addTaskDiv.addEventListener('click', () => {
    const taskForm = document.createElement('div');
    const nameInput = document.createElement('input');
    const descriptionInput = document.createElement('input');

    nameInput.setAttribute('placeholder', 'Task name');
    descriptionInput.setAttribute('placeholder', 'Task description');

    taskForm.appendChild(nameInput);
    taskForm.appendChild(descriptionInput);

    // Add the new task form to the page
    content.appendChild(taskForm);

    const newTask = new Task(nameInput.value, descriptionInput.value, "", "");
    callback(newTask);
  });
}
