"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inputvalidator_1 = __importDefault(require("../helpers/inputvalidator"));
const fs = require('fs/promises');
async function updateTask(inputs) {
    if (!(0, inputvalidator_1.default)(inputs, 2, 1)) {
        return;
    }
    let id = inputs[0];
    let status = inputs[1];
    let taskDescription = inputs[2];
    let targetId = id ? parseInt(id) : -1;
    let currentDate = new Date();
    let formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDay()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    let taskstatus = {
        completed: 'completed',
        active: 'Active'
    };
    console.log("target ID:", targetId);
    if (Number.isNaN(targetId) || targetId === -1) {
        console.log('failure to populate task ID for update ');
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
            console.log("task sucessfully found!");
            return task;
        }
    });
    if (targetTask) {
        console.log("task before update:", targetTask);
        targetTask.description = taskDescription ? taskDescription : targetTask.description;
        if (status) {
            if (status.toUpperCase() === 'C') {
                targetTask.status = taskstatus.completed;
            }
            else if (status.toUpperCase() === 'A') {
                targetTask.status = taskstatus.active;
            }
        }
        targetTask.updatedAt = formattedDate;
        console.log("task after update:", targetTask);
    }
    else {
        console.log('unable to find specified task for update');
        return;
    }
    console.log("File updated sucessfully");
    async function writeToFile(path, data) {
        try {
            await fs.writeFile(path, JSON.stringify(data, null, 4));
            console.log(`Task sucessfully updated list`);
        }
        catch (err) {
            console.log("Error occured in writing to file");
        }
    }
    await writeToFile(path, JSONdata);
}
exports.default = updateTask;
//# sourceMappingURL=updateTask.js.map