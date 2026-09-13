const fs=require('fs/promises')


const writeToFile=async (path:string,data:string)=>{
        try{
            await fs.writeFile(path,JSON.stringify(data,null,4))
            console.log('file written to sucessfully')
        }catch(err){
            console.log('Error occured in updating Tasks')
        }
    }
export default writeToFile;