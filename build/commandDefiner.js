"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addTask_1 = __importDefault(require("./commands/addTask"));
const showList_1 = __importDefault(require("./commands/showList"));
const updateTask_1 = __importDefault(require("./commands/updateTask"));
const deleteTask_1 = __importDefault(require("./commands/deleteTask"));
const clearAllTasks_1 = __importDefault(require("./commands/clearAllTasks"));
const help_1 = __importDefault(require("./commands/help"));
let commands = {
    help: help_1.default,
    addTask: addTask_1.default,
    showList: showList_1.default,
    updateTask: updateTask_1.default,
    deleteTask: deleteTask_1.default,
    clearAllTasks: clearAllTasks_1.default
};
module.exports = commands;
//# sourceMappingURL=commandDefiner.js.map