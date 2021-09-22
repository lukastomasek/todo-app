import DateFormat from './modules/DateFormatter.js'
import Utilities from './classes/Utilities.js'

const addTodo = document.querySelector('.add-todo-btn')
const txtInput = document.querySelector('.todo-inp')
const todosSection = document.querySelector('.todo-container')
const showDate = document.querySelector('.show-date')
const filter = document.querySelector('.filter-select')


const dt = new DateFormat()
const utils = new Utilities()

let todos

let allTodos = []

const GetDateNow = () =>  showDate.textContent = dt.getFormattedDate()

const createToDo = () =>{

  if(txtInput.value === ''){
    alert("Todo is empty!")
    return
  }

  let todoParent = document.createElement('li')
  todoParent.setAttribute('class', 'todo')
  let todoTxt = document.createElement('div')
  todoTxt.setAttribute('class', 'todo-text')
  let removeBtn = document.createElement('button')

  let completeBtn = document.createElement('button')
  completeBtn.setAttribute('class', 'complete')
  completeBtn.innerText = 'Complete'

  removeBtn.setAttribute('class', 'remove-btn')
  removeBtn.innerText = 'remove'

  removeBtn.addEventListener('click', ()=>{
    todoParent.remove()
  })

  completeBtn.addEventListener('click', ()=>{
    todoTxt.classList.toggle('completed')
    console.log('completed')
  })

  // saving todo
  saveTodos(txtInput.value)

  todoTxt.innerText = txtInput.value
  txtInput.value = ''
  todosSection.appendChild(todoParent)
  todoParent.appendChild(todoTxt)
  todoParent.appendChild(removeBtn)
  todoParent.appendChild(completeBtn)

  allTodos.push(todoTxt)
}


const saveTodos = (todo) =>{
  // let todos
  if(localStorage.getItem('todos') === null){
    todos = []
  }else{
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos))
  localStorage.setItem('all', allTodos)
}

const loadTodos = () =>{
  // let todos
  if(localStorage.getItem('todos') === null){
    todos = []
  }else{
    todos = JSON.parse(localStorage.getItem('todos'))
    
  }

  allTodos = localStorage.getItem('all')
  console.log(allTodos)

  todos.forEach(function(todo){
    let todoParent = document.createElement('li')
    todoParent.setAttribute('class', 'todo')
    let newTodo = document.createElement('div')
    newTodo.setAttribute('class', 'todo-text')
    newTodo.innerText = todo

    // complete btn
    let completeBtn = document.createElement('button')
    completeBtn.setAttribute('class', 'complete')
    completeBtn.innerText = 'Complete'

    // remove btn
    let removeBtn = document.createElement('button')
    removeBtn.setAttribute('class', 'remove-btn')
    removeBtn.innerText = 'remove'

    todosSection.appendChild(todoParent)
    todoParent.appendChild(newTodo)
    todoParent.appendChild(removeBtn)
    todoParent.appendChild(completeBtn)


    removeBtn.addEventListener('click', ()=>{
      todos.splice(todos.indexOf(0),1)
      todoParent.remove()
      localStorage.setItem('todos', JSON.stringify(todos))
    })

    completeBtn.addEventListener('click', ()=>{
      console.log('completed')
      newTodo.classList.toggle('completed')
    })

    allTodos.push(newTodo)
  })

  }

  const filterTodos = (e) =>{
    e.preventDefault()

    if(todos.length == 0)
      return

    const val = e.target.value
    console.log(val)

    if(val === "ALL"){
      allTodos.forEach((todo)=>{     
      todo.parentElement.classList.remove('display-none')   
      }) 
    }else if(val === "COMPLETED"){
      allTodos.forEach((todo)=>{
        if(!todo.classList.contains('completed')){
          todo.parentElement.classList.toggle('display-none')
        }
      })
    }else if(val === "PENDING"){
      console.log('pending todos')
    }
}


filter.addEventListener('change', filterTodos)

// utils.clearLocalStorage()

addTodo.addEventListener('click',createToDo)
loadTodos('todo')
GetDateNow()