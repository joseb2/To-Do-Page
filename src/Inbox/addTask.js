export default function addTask() { 
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
    document.body.appendChild(taskForm);

  const name = nameInput.value;
  const description = descriptionInput.value;
  const dueDate = "";
  const priority = "";
  const newTask = new Task(name, description, dueDate, priority);
  newTask.addTask();
});


}