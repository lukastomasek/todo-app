//TODO : design logo

let $todoInput = document.querySelector(".add-todo");
let $todoBtn = document.querySelector(".todo-btn");
let $filterBtn = document.querySelector(".filter-todo");
let $todoContainer = document.querySelector(".todo-list");

function addTodos(event) {
  event.preventDefault();

  let todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todo");

  let newTodo = document.createElement("li");
  newTodo.setAttribute("class", "todo-item");
  newTodo.innerText = $todoInput.value;

  todoDiv.appendChild(newTodo);

  saveToLocalStorage($todoInput.value);

  let completeBtn = document.createElement("button");
  completeBtn.setAttribute("class", "complete-btn");
  completeBtn.innerHTML = ` <i class="fas fa-check"></i>`;

  todoDiv.appendChild(completeBtn);

  let trashBtn = document.createElement("button");
  trashBtn.setAttribute("class", "trash-btn");
  trashBtn.innerHTML = ` <i class="fas fa-trash"></i>`;

  todoDiv.appendChild(trashBtn);

  $todoContainer.appendChild(todoDiv);
  $todoInput.value = "";
}

function deleteAndCheck(event) {
  let target = event.target;

  if (target.classList[0] === "trash-btn") {
    let todo = target.parentElement;

    removeFromLocalStorage(todo);
    todo.classList.add("effect");
    // after we finish animating then remove the object
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (target.classList[0] === "complete-btn") {
    let todo = target.parentElement;
    todo.classList.toggle("completed");
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

function saveToLocalStorage(todo) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  console.log("save file loaded");
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    let todoDiv = document.createElement("div");
    todoDiv.setAttribute("class", "todo");

    let newTodo = document.createElement("li");
    newTodo.setAttribute("class", "todo-item");
    newTodo.innerText = todo;

    todoDiv.appendChild(newTodo);

    let completeBtn = document.createElement("button");
    completeBtn.setAttribute("class", "complete-btn");
    completeBtn.innerHTML = ` <i class="fas fa-check"></i>`;

    todoDiv.appendChild(completeBtn);

    let trashBtn = document.createElement("button");
    trashBtn.setAttribute("class", "trash-btn");
    trashBtn.innerHTML = ` <i class="fas fa-trash"></i>`;

    todoDiv.appendChild(trashBtn);

    $todoContainer.appendChild(todoDiv);
  });
}

function removeFromLocalStorage(todo) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  // find the index of todo
  let todoIndex = todo.children[0].innerText;
  // get the index out of array and remove it
  todos.splice(todos.indexOf(todoIndex), 1);
  //save the file again
  localStorage.setItem("todos", JSON.stringify(todos));
}

window.addEventListener("DOMContentLoaded", getTodos);

$filterBtn.addEventListener("click", filterTodos);

$todoBtn.addEventListener("click", addTodos);

$todoContainer.addEventListener("click", deleteAndCheck);
