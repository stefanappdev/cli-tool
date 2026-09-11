import Inputvalidator from "../helpers/inputvalidator";
const fs=require('fs/promises');
import TODO from "../interfaces/Todo";




async function addTask(inputs:string[]){

    
   if (!Inputvalidator(inputs,1,0)){
        return
   }

   let taskDescription:string|undefined=inputs[0]?.trim();

    let path='./src/List.json'

    let currentDate:Date=new Date();
    let formattedDate:string=`${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDay()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
    let taskID=Math.floor(Math.random()*40);

    let newTask:TODO={
        id: taskID,
        description:taskDescription?taskDescription:'',
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


export default addTask