import TODO from "./interfaces/Todo";
const fs=require('fs/promises');


function help():void{

    console.log('Available commands:');
    console.log('add - add new task to tasklist');
    console.log('delete <taskid> - removes task with specified ID from the list')
    console.log('update <taskid> - update task with specified ID from the list');
    console.log('showList - show tasks currently in the list'); 
    console.log('showCommpleted - show taskd in the list which is completed')
    console.log('help - show guide on set of commands available')
}




function list(){
    
    }   


async function add(description:string){
    
    let todos:TODO[]=[];
    let currentDate:Date=new Date();
    let formattedDate:string=`${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDay()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
    let taskID=Math.floor(Math.random()*40);

    let newTodo:TODO={
        id: taskID,
        description:description,
        status:'active',
        createdAt:formattedDate,
        updatedAt:formattedDate,
    }
  
    let content=JSON.stringify(newTodo);
    try{
       
    await fs.appendFile("./List.json",content+'\n')   
    console.log("Task added sucessfully with taskID:"+taskID);
    }
    catch(err){
        throw new Error('failed to add task ')
    }
   



}


let commands={
    help:help,
    add:add,
}


module.exports=commands;