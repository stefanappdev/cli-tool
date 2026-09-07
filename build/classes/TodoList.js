"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoList {
    todos = [];
    constructor(todos = []) {
        this.todos = todos;
    }
    add(description) {
        let currentDate = new Date();
        let formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDay()} ${currentDate.getTime()}`;
        let taskID = Math.floor(Math.random() * 40);
        let newTodo = {
            id: taskID,
            description: description,
            status: 'active',
            createdAt: formattedDate,
            updatedAt: formattedDate,
        };
        this.todos.push(newTodo);
        console.log("Task added sucessfully with taskID:" + taskID);
    }
    help() {
        console.log('Available commands:add - add new task to tasklist');
        console.log('delete <taskid> - removes task with specified ID from the list');
        console.log('update <taskid> - update task with specified ID from the list');
        console.log('showList - show tasks currently in the list');
        console.log('showCommpleted - show taskd in the list which is completed');
        console.log('help - show guide on set of commands available');
    }
    list() {
        this.todos.forEach(todo => {
            console.log(todo);
        });
    }
}
exports.default = TodoList;
//# sourceMappingURL=TodoList.js.map