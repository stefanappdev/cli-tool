

import TODO from "../interfaces/Todo";
const fs=require('fs/promises');



async function showList(){
    let fPath:string='./src/List.json';
   
    let filehandler=await fs.open(fPath,'r');
    try{
         
         let data:string=await filehandler.readFile({encoding:'utf8'})
         let JSONdata=JSON.parse(data)
         JSONdata['tasks'].length>0?console.log("List of current tasks:\n",JSONdata['tasks']):console.log('No tasks found')
        await filehandler.close()
    }
    catch(err){
       throw new Error('Error opening file')
    }
    
}   

export default showList