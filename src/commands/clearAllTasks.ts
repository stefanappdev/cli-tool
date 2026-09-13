import writeToFile from "../helpers/writeToFile";
import TODO from "../interfaces/Todo";
const fs=require('fs/promises');



async function clearAllTasks():Promise<void>{
    
    let path='./src/List.json';
    console.log('clearing tasks from file');
    let data=await fs.readFile(path);
    let JSONdata=JSON.parse(data)
    JSONdata['tasks'].every((task:TODO)=>task.id=-1);
    let EMPTY=JSONdata['tasks'].filter((task:TODO)=>task.id!==-1)
    JSONdata['tasks']=EMPTY;
    writeToFile(path,JSONdata);
    console.log('List has been cleared')

}



export default clearAllTasks