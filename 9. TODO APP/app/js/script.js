const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoListElement = document.getElementsByClassName("todo-item");

// VARIABLES
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// LOAD TODOS FROM LOCAL STORAGE

// TODO: CREATE A NEW TODO

// FORM SUBMIT
form.addEventListener("submit", function (event) {
  event.preventDefault();
  saveTodoToLocalStorage(event);
  displayTodosFromLocalStorage();
});

// SAVE TODO
function saveTodoToLocalStorage(event) {
  const todoValue = todoInput.value;
  todos.push({
    value: todoValue,
    checked: false,
  });
  event.target.reset();
  localStorage.setItem("todos", JSON.stringify(todos));
}

//  DISPLAY TODOS FROM LOCAL STORAGE

// RENDER TODOS
function displayTodosFromLocalStorage() {
  let todos = JSON.parse(localStorage.getItem("todos"));

  todos.forEach((todo, index) => {
    todoItem.innerHTML += `


    
    `;
  });

  // CLEAR ELEMENT BEFORE A RE-RENDER
  // todosListEl.innerHTML = "";

  // RENDER TODOS
  //   todos.forEach((todo, index) => {
  //     todoListElement.innerHTML += `

  // `;
  //   });
}

// CLICK EVENT LISTENER FOR ALL THE TODOS
todoListElement.addEventListener("click", (event) => {});

// DELETE TODOS FROM LOCAL STORAGE
function deleteTodo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);
  // RE_RENDER
  displayTodos();
  localStorage.setItem("todos", JSON.stringify(todos));
}
