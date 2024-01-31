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

taskList.addEventListener("click", (event) => {
  event.preventDefault(); 
  const target = event.target;
  console.log(target)
  if(target.classList.contains("fa-trash")){
    target.parentElement.parentElement.remove();
}
})

taskList.addEventListener("click", (event) => {
  event.preventDefault(); 
  const target = event.target;
  console.log(target)
  if(target.classList.contains("fa-pen")){
    const task = target.parentElement.parentElement;
    const taskText = task.querySelector(".task-text");
    const text = taskText.innerText;
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.value = text;
    taskText.innerText = '';
    taskText.appendChild(input);
    input.focus();
  }
}
)




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
