"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function help() {
    console.log('Available commands:add - add new task to tasklist');
    console.log('delete <taskid> - removes task with specified ID from the list');
    console.log('update <taskid> - update task with specified ID from the list');
    console.log('showList - show tasks currently in the list');
    console.log('showCommpleted - show taskd in the list which is completed');
}
let commands = {
    'help': help,
};
module.exports = commands;
//# sourceMappingURL=commandDefiner.js.map