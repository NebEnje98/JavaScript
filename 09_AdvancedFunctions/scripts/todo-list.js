const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
      `
    ;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  // We use querySelectorAll as we need all buttons with specific class
  document.querySelectorAll('.js-delete-todo-button') // Ading event listener as there is no html on page before
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        //console.log(index);  Closure, if we have access to value it will always have it
        todoList.splice(index, 1);
        renderTodoList();
      });
    });

}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({name, dueDate});

  inputElement.value = '';

  renderTodoList();
}
