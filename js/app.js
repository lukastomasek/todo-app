//TODO : create content in html, stylize the todo , add functionality , save to local files

let $todoInput = document.querySelector(".add-todo");
let $todoBtn = document.querySelector(".todo-btn");
let $filterBtn = document.querySelector(".filter-todo");
let $todoContainer = document.querySelector(".todo-list");

function addTodos(event) {
  event.preventDefault();

  let todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todo");

  let todoItem = document.createElement("li");
  todoItem.setAttribute("class", "todo-item");
  todoItem.innerText = $todoInput.value;

  todoDiv.appendChild(todoItem);

  let completeBtn = document.createElement("button");
  completeBtn.setAttribute("class", "complete-btn");
  completeBtn.innerHTML = ` <i class="fas fa-check"></i>`;

  completeBtn.addEventListener("click", function () {
    todoDiv.classList.add("completed");
  });

  todoDiv.appendChild(completeBtn);

  let trashBtn = document.createElement("button");
  trashBtn.setAttribute("class", "trash-btn");
  trashBtn.innerHTML = ` <i class="fas fa-trash"></i>`;

  trashBtn.addEventListener("click", removeToDo);

  todoDiv.appendChild(trashBtn);

  $todoContainer.appendChild(todoDiv);
  $todoInput.value = "";
}

function removeToDo(event) {
  let target = event.target;

  if (target.classList[0] === "trash-btn") {
    let todo = target.parentElement;
    todo.remove();
  }
}

function filterTodos(event) {
  let todos = $todoContainer.childNodes;

  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      default:
        break;
    }
  });
}

function saveToLocal() {}

function getTodos() {}

function removeFromLocal() {}

$filterBtn.addEventListener("click", filterTodos);

$todoBtn.addEventListener("click", addTodos);
