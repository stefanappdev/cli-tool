
import addTask from "./commands/addTask";
import showList from "./commands/showList";
import updateTask from "./commands/updateTask";
import deleteTask from "./commands/deleteTask";
import clearAllTasks from "./commands/clearAllTasks";
import help from "./commands/help";








let commands={
    help:help,
    addTask:addTask,
    showList:showList,
    updateTask:updateTask,
    deleteTask:deleteTask,
    clearAllTasks:clearAllTasks

}


module.exports=commands;