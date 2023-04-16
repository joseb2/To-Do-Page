
export default class Task {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate; 
    this.priority = priority;
  }

  addTask() { 
    const taskList = document.getElementById('content');

    // Create a new list item element for the task
    const taskItem = document.createElement('div');
    
    const taskName = document.createElement('span')
    const taskDesc = document.createElement('span');
    taskName.innerHTML = 
    
    // input from all fields = this.name ~ this.priority
    // create new constructor from that
    // the new li element will display this.name from that constructor as a header
    // then this.description as a subtext


    taskList.appendChild(taskItem);
  }
}




/*prompt that highlights a div/span of icon and words "add task"

Click is made. Creates bordered div with input normal, input text-area
and four buttons underneath.





*/