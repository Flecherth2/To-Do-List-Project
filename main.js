const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskText");
const taskList = document.querySelector("#taskList");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(taskInput.value)
  if(taskInput.value === '' || taskInput.value == null) return;
  console.log(taskInput.value)
  createNewTask(taskInput.value);
})

function createNewTask(text) {
  const task = document.createElement("li");
  task.classList.add("task");

  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");

  const taskText = document.createElement("p");
  taskText.classList.add("task-text");
  taskText.innerText = text;

  const btns = document.createElement("div");
  btns.classList.add("task-buttons");

  const editBtn = document.createElement("button");
  editBtn.classList.add("task-edit-button");
  editBtn.innerText = "🖊️";

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("task-deletion-button");
  removeBtn.innerText = "🗑️";

  btns.appendChild(editBtn);
  btns.appendChild(removeBtn);

  task.appendChild(check);
  task.appendChild(taskText);
  task.appendChild(btns);

  taskList.appendChild(task);
 
  
}
