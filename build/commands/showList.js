"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inputvalidator_1 = __importDefault(require("../helpers/inputvalidator"));
const fs = require('fs/promises');
async function showList(input) {
    /*displays task list based on status or entire list*/
    if (!(0, inputvalidator_1.default)(input, 0, 1)) {
        return;
    }
    let displayFlag = input[0];
    //displays all tasks
    const showAll = (data) => {
        data.length > 0 ? console.log("List of current tasks:\n", data) : console.log('No tasks found');
    };
    //show all active tasks
    const showActive = (data) => {
        console.log("active tasks\n:", data.filter((task) => {
            if (task.status === 'active') {
                return task;
            }
        }));
    };
    //shows all completed tasks
    const showCompleted = (data) => {
        console.log("completed tasks:\n", data.filter((task) => {
            if (task.status === 'completed') {
                return task;
            }
        }));
    };
    let fPath = './src/List.json';
    try {
        let data = await fs.readFile(fPath);
        let JSONdata = JSON.parse(data);
        if (displayFlag) {
            if (displayFlag.toUpperCase() === '-C') {
                showCompleted(JSONdata['tasks']);
            }
            else if (displayFlag.toUpperCase() === '-A') {
                showActive(JSONdata['tasks']);
            }
        }
        else {
            showAll(JSONdata['tasks']);
        }
    }
    catch (err) {
        throw new Error('Error opening file');
    }
}
exports.default = showList;
//# sourceMappingURL=showList.js.map