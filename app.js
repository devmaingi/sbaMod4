// Get references to DOM elements from the HTML id attributes
let taskInput = document.getElementById("taskInput");
let categoryInput = document.getElementById("categoryInput");
let statusInput = document.getElementById("statusInput");
let dueDateInput = document.getElementById("dueDateInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
let filterCategory = document.getElementById("filterCategory");
let filterStatus = document.getElementById("filterStatus");

let tasks = [];
// add task
addTaskButton.addEventListener("click", function () {
  let taskText = {
    description: taskInput.value,
    category: categoryInput.value,
    status: statusInput.value,
    dueDate: dueDateInput.value,
  };
  if (
    taskText === "" &&
    categoryInput.value === "" &&
    statusInput.value === "" &&
    dueDateInput.value === ""
  ) {
    alert("Please enter a task!");
    return;
  }
// Create list items
  let listItem = document.createElement("li");
  listItem.innerText =
    taskText.description +
    " | " +
    taskText.category +
    " | " +
    taskText.status +
    " | " +
    taskText.dueDate;
  listItem.className = "task-item";

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  listItem.appendChild(checkbox);

  taskList.appendChild(listItem);
  taskInput.value = ""; // Clear the input field
});
// Remove task on click
taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    taskList.removeChild(event.target);
  }
});
// Clear all tasks
clearTasksButton.addEventListener("click", function () {
  taskList.innerHTML = "";
});
//remove last task
removeTaskButton.addEventListener("click", function () {
  let lastTask = taskList.lastElementChild;
  if (lastTask) {
    taskList.removeChild(lastTask);
  }
});
/// Sort tasks by due date
sortTasksButton.addEventListener("click", function () {
  let tasksArray = Array.from(taskList.children);
  tasksArray.sort((a, b) => {
    let dateA = new Date(a.innerText.split(" | ")[3]);
    let dateB = new Date(b.innerText.split(" | ")[3]);
    return dateA - dateB;
  });
  taskList.innerHTML = "";
  tasksArray.forEach((task) => taskList.appendChild(task));
});
