import TODO from "../interfaces/Todo"

class Todo implements TODO {
    id:number;
    description:string;
    status:string;
    createdAt:Date;
    updatedAt:Date;


    constructor(id:number,description:string,status:string,createdAt:Date,updateAt:Date){
        this.id=id;
        this.description=description;
        this.status=status;
        this.createdAt=createdAt;
        this.updatedAt=updateAt
    }

    generateTaskId():void{
         this.id=Math.floor(Math.random()*30)
    }

     getDescripton(desc:string):string{
      return this.description
    }

    setDescripton(desc:string):void{
      this.description=desc
    }
    
    getTaskId():number{
        return this.id
    }




}