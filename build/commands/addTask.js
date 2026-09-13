"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inputvalidator_1 = __importDefault(require("../helpers/inputvalidator"));
const writeToFile_1 = __importDefault(require("../helpers/writeToFile"));
const fs = require('fs/promises');
async function addTask(inputs) {
    if (!(0, inputvalidator_1.default)(inputs, 1, 0)) {
        return;
    }
    let taskDescription = inputs[0]?.trim();
    let path = './src/List.json';
    let currentDate = new Date();
    let formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDay()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    let taskID = Math.floor(Math.random() * 40);
    let newTask = {
        id: taskID,
        description: taskDescription ? taskDescription : '',
        status: 'active',
        createdAt: formattedDate,
        updatedAt: formattedDate,
    };
    /**read file first*/
    let data = '';
    try {
        data = await fs.readFile(path);
    }
    catch (err) {
        console.log("An error occured while attempting to read the file");
    }
    /**parse JSONdata,
     * check if any tasks have duplicate id to the new one,
     *  regenerate id of newtask */
    let JSONdata = JSON.parse(data);
    JSONdata['tasks'].forEach((task) => {
        if (task.id === newTask.id) {
            while (true) {
                newTask.id = Math.floor(Math.random() * 40);
                if (task.id !== newTask.id) {
                    break;
                }
            }
        }
    });
    /*update task array*/
    JSONdata['tasks'] = [...JSONdata['tasks'], newTask];
    /*write to file*/
    await (0, writeToFile_1.default)(path, JSONdata);
}
exports.default = addTask;
//# sourceMappingURL=addTask.js.map