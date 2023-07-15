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
    this.todoInput = document.querySelector("input");
    this.addBtn = document.querySelector("#addButton");
    this.clearBtn = document.querySelector("#clearButton");

    this.render();
  }
  render() {
    console.log("تودو لیست شروع به کار کرد");

    this.todosContainer.innerHTMl = "";
    this.addTodosDom();
    this.saveTodosIntoLocalStorage();
    this.addBtn.addEventListener("click", () => {
      this.addNewTodo();
    });
    this.clearBtn.addEventListener("click", () => {
      this.clearTodos();
    });
  }

  addTodosDom() {
    console.log("تودوها ب دام اضافه شد");
  }
  addNewTodo(newTodoTitle) {
    console.log("New todo title:", newTodoTitle);
  }
  clearTodos() {
    console.log("تودوها پاک شدند");
  }

  saveTodosIntoLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}

new TodoList(document.querySelector("#todoList"));
