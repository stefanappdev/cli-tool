"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inputvalidator_1 = __importDefault(require("../helpers/inputvalidator"));
const writeToFile_1 = __importDefault(require("../helpers/writeToFile"));
const fs = require('fs/promises');
async function deleteTask(inputs) {
    if (!(0, inputvalidator_1.default)(inputs, 1, 0)) {
        return;
    }
    let id = inputs[0];
    let targetId = id ? parseInt(id) : -1;
    console.log("target ID:", targetId);
    if (Number.isNaN(targetId) || targetId === -1) {
        console.log('failure to populate task ID for deletion ');
        return;
    }
    let path = './src/List.json';
    /*read file first */
    let data = '';
    try {
        data = await fs.readFile(path);
    }
    catch (err) {
        console.log("Error occured in reading file");
    }
    let JSONdata = JSON.parse(data);
    if (JSONdata['tasks'].length === 0) {
        console.log('No task found');
        return;
    }
    let targetTask = JSONdata['tasks'].find((task) => {
        if (task.id === targetId) {
            return task;
        }
    });
    if (!targetTask) {
        console.log('no matching task found');
        return;
    }
    const remainingTasks = JSONdata['tasks'].filter((task) => task.id != targetId);
    JSONdata['tasks'] = remainingTasks;
    console.log('task sucessfully deleted');
    (0, writeToFile_1.default)(path, JSONdata);
}
exports.default = deleteTask;
//# sourceMappingURL=deleteTask.js.map