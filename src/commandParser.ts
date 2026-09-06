let commands=require('./commandDefiner')

function commandParser(command:string,...args:string[]):void{


let inputs:string[]=args.slice(1);


if(command in commands){
  
        commands[command](inputs);        
}

}
module.exports={Parser:commandParser};