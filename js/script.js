class Todo {

    constructor (title) {
        this.title = title
        this.isComplete = false
    }

}

class TodoList {
    constructor (todosContainer) {
        this.todosContainer = todosContainer
        this.todos = JSON.parse(localStorage.getItem('todos')) || []
        this.todoInput = document.querySelector('input')
        this.addBtn = document.querySelector('#addButton')
        this.clearBtn = document.querySelector('#clearButton')

        this.render()
    }

    render () {
        console.log('تودولیست شروع به کار کرد');
        this.todosContainer.innerHTML = ''

        this.addBtn.addEventListener('click', () => {
            this.addNewTodo(this.todoInput.value)
        })

        this.clearBtn.addEventListener('click', () => {
            this.clearTodos()
        })

        this.addTodosToDom()
        this.saveTodosIntoLocalStorage()

    }

    addTodosToDom () {
        console.log("تودوها به دام اضافه شدن");
    }

    addNewTodo (newTodoTitle) {
        console.log('new todo title:', newTodoTitle);
    }

    clearTodos () {
        console.log('تودوها پاک شدن');
    }

    saveTodosIntoLocalStorage () {
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }
}

new TodoList(document.querySelector('#todoList'))