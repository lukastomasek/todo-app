const addTodo = document.querySelector('.add-todo-btn')
const txtInput = document.querySelector('.todo-inp')
const todosSection = document.querySelector('.todos')

const createToDo = () =>{
  let todoParent = document.createElement('div')
  todoParent.setAttribute('class', 'todo')
  let todoTxt = document.createElement('p')
  todoTxt.setAttribute('class', 'todo-text')
  let removeBtn = document.createElement('button')
  removeBtn.setAttribute('class', 'remove-btn')
  removeBtn.innerText = 'remove'
  
  removeBtn.addEventListener('click', ()=>{
    console.log(`removing todo: ${todoParent}`)
    todoParent.remove()
  })
  todoTxt.innerText = txtInput.value
  txtInput.value = ''
  todosSection.appendChild(todoParent)
  todoParent.appendChild(todoTxt)
  todoParent.appendChild(removeBtn)
  console.log('creating todo')
}


const saveTodos = () =>{

}

const loadTodos = () =>{

}

addTodo.addEventListener('click',createToDo)