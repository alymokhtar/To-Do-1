// addButton.onclick = function () {
//   if (taskInput.value === "") {
//     console.log("Empty");
//   } else {
//     noMessage.remove();
//     let mainSpan = document.createElement("span");
//     let delElement = document.createElement("span");
//     mainSpan.appendChild(document.createTextNode(taskInput.value));
//     mainSpan.className = "task-box";
//     delElement.appendChild(document.createTextNode("Delete"));
//     delElement.classList.add("delete");
//     tasksContent.appendChild(mainSpan);
//     mainSpan.appendChild(delElement);
//     taskInput.value = "";
//     taskInput.focus();
//   }
// };

let taskInput = document.querySelector(".add-task input");
addButton = document.querySelector(".plus");
tasksContent = document.querySelector(".tasks-content");
noMessage = document.querySelector(".no-tasks-message");

countTasks = document.querySelector(".tasks-count span");
completed = document.querySelector(".tasks-completed span");

window.onload = function () {
  taskInput.focus();
};
addButton.onclick = help;
function help() {
  if (taskInput.value === "") {
    console.log("Empty");
  } else {
    noMessage = document.querySelector(".no-tasks-message");
    if (document.body.contains(noMessage)) {
      noMessage.remove();
    }
    let mainSpan = document.createElement("span");
    let delElement = document.createElement("span");
    mainSpan.appendChild(document.createTextNode(taskInput.value));
    mainSpan.className = "task-box";
    delElement.appendChild(document.createTextNode("Delete"));
    delElement.classList.add("delete");
    tasksContent.appendChild(mainSpan);
    mainSpan.appendChild(delElement);
    taskInput.value = "";
    taskInput.focus();
    calculateTasks();
  }
}
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.remove();
    calculateTasks();
    if (tasksContent.childElementCount == 0) {
      createNoTasks();
    }
  }
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
    calculateTasks();
  }
});
// help();
function createNoTasks() {
  let msgSpan = document.createElement("span");
  msgSpan.appendChild(document.createTextNode("No Tasks To Show"));
  msgSpan.classList.add("no-tasks-message");
  tasksContent.appendChild(msgSpan);
}
function calculateTasks() {
  countTasks.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;
  completed.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}
