import DateFormat from './modules/DateFormatter.js'
import Utilities from './classes/Utilities.js'

const dt = new DateFormat()
const utils = new Utilities()


const clear = document.querySelector('.clear')
const dateElement = document.getElementById('date')

const todoList = document.querySelector('.todo-list')
const input = document.querySelector('.add-todo')

const position = 'beforeend'

let LIST = []
let id = 0

const checked = "far fa-check-circle"
const unChecked = "far fa-circle"
const lineThrough = "line-through"


function addTodo(toDo,id,done,trasj){

  if(trash){
    return
  }
  const DONE = done ? checked : unChecked
  const LINE = done ? lineThrough : ""

  const text = `
    <li class="todo-item">
      <i class="far ${DONE}" job="complete" id="${id}"></i>
      <p class="text ${LINE}">${toDo}</p>
      <i class="fas fa-trash" job="delete" id="${id}"></i>
    </li>
  `
  const htmlObj  =  document.createElement('li')
  htmlObj.innerHTML = text
  todoList.insertAdjacentElement(position,htmlObj)
}


function completeTodo(element){
  element.classList.toggle(checked)
  element.classList.toggle(unChecked)
  //select parent element {li} and toggle class linethrough
  element.parentNode.querySelector('.text').classList.toggle(lineThrough)
}

function removeTodo(element){
  element.parentNode.parentNode.removeChild(element.parentNode)
  LIST[element.id].trash = true
}


function loadTodo(array){
  array.foreach(function(item){
    addTodo(item.name, item.id, item.done,item.trash)
  })
}

// clearing storage
clear.addEventListener('click',()=> utils.clearLocalStorage())

dateElement.innerHTML = dt.getFormattedDate()

todoList.addEventListener("click", (event) =>{
  let element = event.target

  //check the custom attribute value which will return delete or complete
  const elementJob = event.target.attributes.job.value

  if(elementJob === 'complete'){
    completeTodo(element)
  }else if( elementJob === 'delete'){
    removeTodo(element)
  }

})

document.addEventListener('keyup',(e)=>{
  // if key is enter
  if(e.keyCode === 13){
    const todo = input.value
    console.log('adding todo')
    if(todo){
      addTodo(todo)

      input.value = ""
    }

  }
})