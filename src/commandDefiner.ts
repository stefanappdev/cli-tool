
import addTask from "./commands/addTask";
import showList from "./commands/showList";
import updateTask from "./commands/updateTask";
import deleteTask from "./commands/deleteTask";
import help from "./commands/help";








let commands={
    help:help,
    addTask:addTask,
    showList:showList,
    updateTask:updateTask,
    deleteTask:deleteTask

}


module.exports=commands;