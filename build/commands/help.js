"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function help() {
    console.log('Available commands:');
    console.log('addTask <task>- add new task to tasklist');
    console.log('deleteTask <taskid> - removes task with specified ID from the list');
    console.log('updateTask <taskid> - update task with specified ID from the list');
    console.log('showList - show tasks currently in the list');
    console.log('showCompleted - show tasks in the list which are completed');
    console.log('showActive - show tasks in the list which are active');
    console.log('clearTasks - Removes all Tasks from the list');
    console.log('help - show guide on set of commands available');
}
exports.default = help;
//# sourceMappingURL=help.js.map