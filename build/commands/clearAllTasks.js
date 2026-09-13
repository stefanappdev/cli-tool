"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const writeToFile_1 = __importDefault(require("../helpers/writeToFile"));
const fs = require('fs/promises');
async function clearAllTasks() {
    let path = './src/List.json';
    console.log('clearing tasks from file');
    let data = await fs.readFile(path);
    let JSONdata = JSON.parse(data);
    JSONdata['tasks'].every((task) => task.id = -1);
    let EMPTY = JSONdata['tasks'].filter((task) => task.id !== -1);
    JSONdata['tasks'] = EMPTY;
    (0, writeToFile_1.default)(path, JSONdata);
    console.log('List has been cleared');
}
exports.default = clearAllTasks;
//# sourceMappingURL=clearAllTasks.js.map