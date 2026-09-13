

import TODO from "../interfaces/Todo";
import Inputvalidator from "../helpers/inputvalidator";
const fs=require('fs/promises');



async function showList(input:string[]){

    /*displays task list based on status or entire list*/

    if(!Inputvalidator(input,0,1)){
        return
    }


    
    let displayFlag:string|undefined=input[0];


    //displays all tasks
    const showAll=(data:TODO[]):void=>{
         data.length>0?console.log("List of current tasks:\n",data):console.log('No tasks found')
    }


    //show all active tasks
    const showActive=(data:TODO[]):void=>{
          console.log("active tasks\n:",data.filter((task:TODO)=>{
            if(task.status==='active'){
                return task
            }}))
    }


    //shows all completed tasks
    const showCompleted=(data:TODO[]):void=>{
        console.log("completed tasks:\n",data.filter((task:TODO)=>{
            if(task.status==='completed'){
                return task
            }
        }) )
    }


    let fPath:string='./src/List.json';
   
    
    try{
         
         let data:string=await fs.readFile(fPath)
         let JSONdata=JSON.parse(data)

         if(displayFlag){
            if(displayFlag.toUpperCase()==='-C'){
                showCompleted(JSONdata['tasks'])
            }else if(displayFlag.toUpperCase()==='-A'){
                showActive(JSONdata['tasks'])
            }
         }else{
                showAll(JSONdata['tasks'])
            }
    }
    catch(err){
       throw new Error('Error opening file')
    }
    
}   

export default showList