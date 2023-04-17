  // addTask.js
  import Task from "./task.js";
  import { parseISO } from "date-fns";
  import flatpickr from "flatpickr";
  import "flatpickr/dist/flatpickr.min.css"


  export default function addTask(addNewTask) {
    const content = document.getElementById("content");
    const addTaskDiv = document.createElement("div");

    addTaskDiv.textContent = "+ Add Task";
    content.append(addTaskDiv);

    addTaskDiv.addEventListener("click", () => {
      // Hide the "Add Task" button
      addTaskDiv.style.display = "none";

      // Create the task form and input fields
      const taskForm = document.createElement("div");
      taskForm.style.cssText = `
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, auto) 1fr;
        grid-template-areas: 
          "taskName taskName"
          "taskDescription taskDescription"
          "dueDate randomButton"
          "button-container button-container";
      `;

      const taskNameInput = document.createElement("input");
      taskNameInput.setAttribute("placeholder", "Task name");
      taskNameInput.style.cssText = `
        grid-area: taskName;
        border: none;
        outline: none;
      `;

      const taskDescriptionInput = document.createElement("input");
      taskDescriptionInput.style.gridArea = "taskDescription";
      taskDescriptionInput.setAttribute("placeholder", "Task description");
      taskDescriptionInput.style.cssText = `
        grid-area: taskDescription;
        border: none;
        outline: none;
      `;

      const dueDateInput = document.createElement("input");
      dueDateInput.setAttribute("type", "text");
      dueDateInput.setAttribute("id", "task_due_date");
      dueDateInput.setAttribute("readonly", "true");
      dueDateInput.style.gridArea = "dueDate";

      const dueDateButton = document.createElement("button");
      dueDateButton.style.gridArea = "dueDate";
      dueDateButton.textContent = "Select Date";

      const randomButton = document.createElement("button");
      randomButton.style.gridArea = "randomButton";
      randomButton.textContent = "Random button";

      const cancelButton = document.createElement("button");
      cancelButton.style.gridArea = "cancelButton";
      cancelButton.textContent = "Cancel";
      cancelButton.style.width = "50px";

      const submitButton = document.createElement("button");
      submitButton.style.gridArea = "addButton";
      submitButton.textContent = "Add Task";

      const buttonContainer = document.createElement("div");
      buttonContainer.style.cssText = `
        grid-area: button-container;
        display: flex;
        justify-content: flex-end;
      `;
      buttonContainer.appendChild(cancelButton);
      buttonContainer.appendChild(submitButton);

      taskForm.appendChild(taskNameInput);
      taskForm.appendChild(taskDescriptionInput);
      taskForm.appendChild(dueDateInput);
      taskForm.appendChild(dueDateButton);
      taskForm.appendChild(randomButton);
      taskForm.appendChild(buttonContainer);
      content.appendChild(taskForm);

      const dueDatePicker = flatpickr(dueDateInput, {
        dateFormat: "F j",
        minDate: new Date(),
        disableMobile: true,
        onChange: (selectedDates, dateStr) => {
          if (selectedDates.length) {
            dueDateButton.textContent = dateStr;
          } else {
            dueDateButton.textContent = "Select Date";
          }
        },
      });
      
      dueDateButton.addEventListener("click", () => {
        dueDatePicker.open();
        console.log(dueDatePicker.minDate);
      });
      
      
      submitButton.addEventListener("click", () => {
        // Create a new task object and add it to the array
        const newTask = new Task(
          taskNameInput.value,
          taskDescriptionInput.value,
          parseISO(dueDateButton.value),
          ""
        );
        addNewTask(newTask);

        // Clear the input fields
        taskNameInput.value = "";
        taskDescriptionInput.value = "";
        dueDateButton.value = "";

// Create a function to format the task object
function formatTaskObject(task) {
  return `
    Name: ${task.name}
    Description: ${task.description}
    Due Date: ${task.dueDate}
    Priority: ${task.extra}
  `;
}


    const taskElement = document.createElement("div");
    taskElement.textContent = newTask.name;
    taskElement.classList.add("task-element");

const popOutBox = document.createElement("div");
popOutBox.classList.add("pop-out-box");
popOutBox.textContent = formatTaskObject(newTask);
taskElement.appendChild(popOutBox);
    content.prepend(taskElement);

    taskElement.addEventListener("mouseover", () => {
      popOutBox.style.display = "block";
    });
    taskElement.addEventListener("mouseout", () => {
      popOutBox.style.display = "none";
    });

    content.removeChild(taskForm);
    addTaskDiv.style.display = "block";

    });

    

  cancelButton.addEventListener("click", () => {
    // Remove the task form from the page and show the "Add Task" button
    content.removeChild(taskForm);
    addTaskDiv.style.display = "block";
  });
}); 
}
