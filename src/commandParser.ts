let commands=require('./commandDefiner')

function commandParser(command:string,...inputs:string[]):void{

        
        if(command in commands){
               
                        commands[command](inputs)
                
                       
        }else{
                console.log('unknown command provided \n')
                commands['help']();
        }

}
module.exports={Parser:commandParser};