//TODO : create content in html, stylize the todo , add functionality , save to local files

$todoInput = document.querySelector(".add-todo");
$todoBtn = document.querySelector(".todo-btn");
$filterBtn = document.querySelector("filter-todo");
$todoContainer = document.querySelector(".todo-container");

function addTodos(event) {
  event.preventDefault();

  let todoDiv = document.createElement("div");
  todoDiv.setAttribute("class", "todo");

  let todoItem = document.createElement("li");
  todoItem.setAttribute("class", "todo-li");
  todoItem.innerText = "hi";

  todoDiv.appendChild(todoItem);

  let completeBtn = document.createElement("button");
  completeBtn.setAttribute("class", "complete");
  completeBtn.innerHTML = ` <i class="fas fa-plus-square"></i>`;

  todoItem.appendChild(completeBtn);

  let trashBtn = document.createElement("button");
  trashBtn.setAttribute("class", "trash");
  trashBtn.innerHTML = ` <i class="fas fa-plus-square"></i>`;

  todoItem.appendChild(trashBtn);

  $todoContainer.appendChild(todoDiv);
}

function removeToDo(event) {}

$todoBtn.addEventListener("click", addTodos);
