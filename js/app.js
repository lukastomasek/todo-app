//TODO : create content in html, stylize the todo , add functionality , save to local files

$todoInput = document.querySelector(".add-todo");
$todoBtn = document.querySelector(".todo-btn");
$filterBtn = document.querySelector("filter-todo");
$todoContainer = document.querySelector(".todo-container");

function addTodos(event) {
  event.preventDefault();
}
$todoBtn.addEventListener("click", addTodos);
