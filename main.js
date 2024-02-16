const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskText");
const taskList = document.querySelector("#taskList");

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
})

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(taskInput.value)
  if(taskInput.value === '' || taskInput.value == null) return;
  console.log(taskInput.value)
  createNewTask(taskInput.value);
  taskInput.value = '';
  saveTasks();
})

taskList.addEventListener("click", (event) => {
  event.preventDefault(); 
  const target = event.target;
  console.log(target)
  if(target.classList.contains("fa-trash")){
    target.parentElement.parentElement.remove();
    saveTasks();
}
})

taskList.addEventListener("click", (event) => {
  event.preventDefault(); 
  const target = event.target;
  console.log(target)
  //Edit button
  if(target.classList.contains("fa-pen")){
    const task = target.parentElement.parentElement;
    const taskText = task.querySelector(".task-text");
    const editButton = task.querySelector(".fa-pen");
    const buttons = editButton.parentElement;
    const text = taskText.innerText;
    const check = task.querySelector(".fa-square");
    const input = document.createElement("input");
    const saveBtn = document.createElement("i"); 
    check.style.display = "none";
    input.classList.add("edit-input");
    saveBtn.classList.add("fa-solid");
    saveBtn.classList.add("fa-floppy-disk");
    saveBtn.classList.add("fa-xl");
    buttons.insertBefore(saveBtn, editButton);
    editButton.style.display = "none";
    input.setAttribute("type", "text");
    input.value = text;
    taskText.innerText = '';
    taskText.appendChild(input);
    input.focus();
  }
  //Save button
  if(target.classList.contains("fa-floppy-disk")){
    const task = target.parentElement.parentElement;
    const taskText = task.querySelector(".task-text");
    const editButton = task.querySelector(".fa-pen");
    const check = task.querySelector(".fa-square");
    const input = taskText.querySelector("input");
    const text = input.value;
    taskText.innerText = text;
    input.remove();
    target.remove();
    check.style.display = "block";
    editButton.style.display = "block";
    saveTasks();
  }
  //Check and uncheck tasks
  if(target.classList.contains("fa-square") | target.classList.contains("fa-check-square")){
    const task = target.parentElement;
    const value = target.id;
    const editBtn = task.querySelector(".fa-pen");
    if (value === "false") {
      target.classList.remove("fa-square");
      target.classList.add("fa-check-square");
      editBtn.style.display = "none"; 
      target.setAttribute("id", "true");
    }
    else {
      target.classList.remove("fa-check-square");
      target.classList.add("fa-square");
      editBtn.style.display = "block";
      target.setAttribute("id", "false");
    }
    task.classList.toggle("done");
    saveTasks();
  }
}
)


function createNewTask(text) {
  const task = document.createElement("li");
  task.classList.add("task");

  const check = document.createElement("i");
  check.classList.add("fa-regular");
  check.classList.add("fa-square");
  check.classList.add("fa-xl");
  check.setAttribute("id", "false");



  const taskText = document.createElement("p");
  taskText.classList.add("task-text");
  taskText.innerText = text;

  const btns = document.createElement("div");
  btns.classList.add("task-buttons");

  const editBtn = document.createElement("i");
  editBtn.classList.add("fa-solid");
  editBtn.classList.add("fa-pen");
  editBtn.classList.add("fa-xl");

  const removeBtn = document.createElement("i");
  removeBtn.classList.add("fa-solid");
  removeBtn.classList.add("fa-trash");
  removeBtn.classList.add("fa-xl");

  btns.appendChild(editBtn);
  btns.appendChild(removeBtn);

  task.appendChild(check);
  task.appendChild(taskText);
  task.appendChild(btns);

  taskList.appendChild(task);  
}

const saveTasks = () => {
  const tasks = taskList.innerHTML;
  localStorage.setItem("tasks", tasks);
}
const loadTasks = () => {
  const tasks = localStorage.getItem("tasks");
  if(!tasks) return;
  taskList.innerHTML = tasks;
}
