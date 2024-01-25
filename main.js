const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskText");
const taskList = document.querySelector("#taskList");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if(taskInput.value === '' || taskInput.value == null) return;
  createNewTask(taskInput.value);
})

function createNewTask(task) {
  const taskTemplate = document.querySelector("#taskTemplate");
  const clonedTask = document.importNode(taskTemplate.textContent, true);
  const taskText = clonedTask.querySelector(".task-text");
  taskText.innerText = task;
  taskList.appendChild(clonedTask);
 
  
}
