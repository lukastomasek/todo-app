import DateFormat from './modules/DateFormatter.js'
import Utilities from './classes/Utilities.js'

const dt = new DateFormat()
const utils = new Utilities()


const clear = document.querySelector('.clear')
const dateElement = document.getElementById('date')

const todoList = document.querySelector('.todo-list')
const input = document.querySelector('.add-todo')


const checked = "fa-check-circle"
const unChecked = "fa-circle"
const lineThrough = "line-through"
const complete = "complete-item"
const unComplete = "todo-item"


let list,id

// get item from local storage
let data = localStorage.getItem('TODO')
//check if data is not empty
if(data){
  list = JSON.parse(data)
  id = list.length // set id to last item in the list
  loadList(list) // load list to the user interface
}else{
  list = []
  id = 0
}


function loadList(array){
  array.forEach(function(item){
    addTodo(item.name, item.id, item.done,item.trash)
  })
}


function addTodo(toDo,id,done,trash){
  if(trash){
    return
  }
  const position = 'beforeend'

  const COMPLETE = done ? complete : unComplete

  const DONE = done ? checked : unChecked

  const LINE = done ? lineThrough : ""


  const item = `
    <li class="${COMPLETE}">
      <i class="far ${DONE}" job = "complete" id="${id}"></i>
      <p class="text ${LINE}">${toDo}</p>
      <i class="fas fa-trash" job = "delete" id="${id}"></i>
    </li>
  `
  const htmlObj  =  document.createElement('li')
  htmlObj.innerHTML = item
  todoList.insertAdjacentElement(position,htmlObj)
}


function completeTodo(element){
  element.classList.toggle(checked)
  element.classList.toggle(unChecked)
  element.parentNode.classList.toggle(complete)
  element.parentNode.classList.toggle(unComplete)

  //select parent element {li} and toggle class linethrough
  element.parentNode.querySelector('.text').classList.toggle(lineThrough)

  list[element.id].done = list[element.id].done ? false : true
}

function removeTodo(element){
  element.parentNode.parentNode.removeChild(element.parentNode)

  list[element.id].trash = true
}


function loadTodo(array){
  array.foreach(function(item){
    addTodo(item.name, item.id, item.done,item.trash)
  })
}

// clearing storage
clear.addEventListener('click',()=>{
  const icon =  clear.children[0]
  icon.classList.toggle("fa-spin")
  setTimeout(()=>{
    icon.classList.toggle("fa-spin")
  },2000)
  utils.clearLocalStorage()
})

dateElement.innerHTML = dt.getFormattedDate()

todoList.addEventListener("click", (event) =>{
  const element = event.target
  //check the custom attribute value which will return delete or complete
  const elementJob = element.attributes.job.value

  if(elementJob === 'complete'){
    completeTodo(element)
  }else if( elementJob === 'delete'){
    removeTodo(element)
  }

   //add item to local storage
   localStorage.setItem('TODO',JSON.stringify(list))
})

document.addEventListener('keyup',(e)=>{
  // if key is enter
  if(e.keyCode === 13){
    const todo = input.value

    if(todo){
      addTodo(todo,id,false,false)

      list.push({
        name:todo,
        id: id,
        done: false,
        trash:false,
      })
      //add item to local storage
      localStorage.setItem('TODO',JSON.stringify(list))

      id++

    }
    input.value = ""

  }
})