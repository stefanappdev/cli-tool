let commands=require('./commandDefiner')

function commandParser(command:string,...args:string[]):void{


let inputs:string[]=args.slice();


if(command in commands){
  
        commands[command](inputs);        
}

}
module.exports={Parser:commandParser};