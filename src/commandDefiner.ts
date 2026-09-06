

function help():void{

    console.log('Available commands:add - add new task to tasklist');
    console.log('delete <taskid> - removes task with specified ID from the list')
    console.log('update <taskid> - update task with specified ID from the list');
    console.log('showList - show tasks currently in the list'); 
    console.log('showCommpleted - show taskd in the list which is completed')
    console.log('help - show guide on set of commands available')
}





let commands={
    'help':help,
}


module.exports=commands;