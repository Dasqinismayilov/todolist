class TodoApp {
    constructor() {
        this.input = document.getElementById("todo-input");
        this.todoList = document.getElementById("todo-list");
    }

    addTodo() {
        const todoText = this.input.value.trim();
        if (todoText) {
            this.createTodoItem(todoText);
            this.input.value = "";
        }
    }

    createTodoItem(todoText) {
        const listItem = document.createElement("li");
        listItem.textContent = todoText;
        const deleteButton = this.createDeleteButton(listItem);
        listItem.appendChild(deleteButton);
        this.todoList.appendChild(listItem);
    }

    createDeleteButton(listItem) {
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.onclick = () => {
            this.todoList.removeChild(listItem);
        };
        return deleteButton;
    }

    sortTodoList() {
        const items = Array.from(this.todoList.children);

        items.sort((a, b) => {
            const textA = a.textContent.trim().toLowerCase();
            const textB = b.textContent.trim().toLowerCase();
            return textA.localeCompare(textB, undefined, { numeric: true });
        });

        items.forEach(item => this.todoList.appendChild(item));
    }

    hideInput() {
        this.input.classList.toggle("hidden");
    }
}

const todoApp = new TodoApp();
