class Todo {
  constructor(title) {
    this.title = title;
    this.isComplete = false;
  }
}

class TodoList {
  constructor(todosContainer) {
    this.todosContainer = todosContainer;
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.todoInput = document.querySelector("iput");
    this.addBtn = document.querySelector("#addButton");
    this.clearBtn = document.querySelector("#clearButton");

    this.render();
  }
  render() {}
}

new TodoList(document.querySelector("#todoList"));
