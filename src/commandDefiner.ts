
import TODO from "./interfaces/Todo";
const fs=require('fs/promises');


function help():void{

    console.log('Available commands:');
    console.log('add<task>- add new task to tasklist');
    console.log('delete <taskid> - removes task with specified ID from the list')
    console.log('update <taskid> - update task with specified ID from the list');
    console.log('showList - show tasks currently in the list'); 
    console.log('showCommpleted - show taskd in the list which is completed')
    console.log('help - show guide on set of commands available')
}




async function showList(){
    let fPath:string='./src/List.json';
   
    let filehandler=await fs.open(fPath,'r');
    try{
         console.log('displaying list of tasks');
         let data:string=await filehandler.readFile({encoding:'utf8'})
         let currentTasks=JSON.parse(data)
         console.log(currentTasks)
        await filehandler.close()
    }
    catch(err){
       throw new Error('Error opening file')
    }
    
}   

async function updateTask(targetId:number,desc:string):Promise<void>{
    let path='./src/List.json'
    /*read file first */
    let data:string='';
    try{
        data=await fs.readFile(path);

    }catch(err){
        console.log("Error occured in reading file")
    }

    let JSONdata=JSON.parse(data);
    
    
    //console.log("updated:",JSONdata['tasks'])
    
    async function writeToFile(path:string,data:string){
        try{
            await fs.writeFile(path,JSON.stringify(data,null,4));
            console.log(`Task sucessfully updated list`)            
        }catch(err){
               console.log("Error occured in writing to file")
        }
    }

   //await writeToFile(path,JSONdata)
    

}


async function addTask(inputs:string[]){

        
    if (inputs.length>1){
        console.log('too many arguements provided for addTask')
        return
    }else if(inputs.every(input=>input==='')){
        console.log('no arguements provided for addTask')
        return
    }
    
   

    let path='./src/List.json'

    let currentDate:Date=new Date();
    let formattedDate:string=`${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDay()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
    let taskID=Math.floor(Math.random()*40);

    let newTask:TODO={
        id: taskID,
        description:inputs[0]?inputs[0]?.toString():'No description provided',
        status:'active',
        createdAt:formattedDate,
        updatedAt:formattedDate,
    } 

    /**read file first*/
       let data:string='';
       try{ 
        data=await fs.readFile(path)
       }catch(err){
        console.log("An error occured while attempting to read the file");
       }

        
        
        
        /**parse JSONdata, 
         * check if any tasks have duplicate id to the new one,
         *  regenerate id of newtask */
        let JSONdata=JSON.parse(data);
        JSONdata['tasks'].forEach((task:TODO)=>{
            if(task.id===newTask.id){
                while (true){
                    newTask.id=Math.floor(Math.random()*40)
                    if (task.id!==newTask.id){break}
                }
            }
        })

        /*update task array*/
        JSONdata['tasks']=[...JSONdata['tasks'],newTask];

        /*write to file*/
        async function writeToFile(path:string,data:TODO[]){
            try{
                await fs.writeFile(path,JSON.stringify(data,null,4))
                console.log(`Task with ID:${taskID} sucessfully written to file`)
            }catch(err){
                console.log('An error occured while writing to the file')
            }
            
        }

        
    await writeToFile(path,JSONdata)    

}




let commands={
    help:help,
    addTask:addTask,
    showList:showList,
    updateTask:updateTask,

}


module.exports=commands;