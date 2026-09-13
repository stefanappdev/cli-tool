
import TODO from "../interfaces/Todo";
import Inputvalidator from "../helpers/inputvalidator";
import writeToFile from "../helpers/writeToFile";
const fs=require('fs/promises');



async function deleteTask(inputs:string[]):Promise<void>{
          if(!Inputvalidator(inputs,1,0)){
        return
    }

    let id:string|undefined=inputs[0];
    let targetId:number|undefined=id?parseInt(id):-1;
    console.log("target ID:",targetId)
    if(Number.isNaN(targetId)||targetId===-1){
        console.log('failure to populate task ID for deletion ');
        return
    }
    let path='./src/List.json';

     /*read file first */
    let data:string='';
    try{
        data=await fs.readFile(path);

    }catch(err){
        console.log("Error occured in reading file")
    }

    let JSONdata=JSON.parse(data);

    if(JSONdata['tasks'].length===0){
        console.log('No task found');
        return
    }

    let targetTask:TODO=JSONdata['tasks'].find((task:TODO)=>{
        if(task.id===targetId){
            return task
        }
    })

    if(!targetTask){
        console.log('no matching task found');
        return
    }

    const remainingTasks=JSONdata['tasks'].filter((task:TODO)=>task.id!=targetId);
    JSONdata['tasks']=remainingTasks
    console.log('task sucessfully deleted')

    

    writeToFile(path,JSONdata)
}


export default deleteTask