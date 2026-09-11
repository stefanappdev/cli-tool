function Inputvalidator(inputs:string[],argsRequired:number,argsOptional:number):boolean{
      if (inputs.length>(argsRequired+argsOptional)){
        console.log('too many arguements provided for command')
        return false
    }else if(inputs.length<argsRequired){
        console.log('too few arguements provided for command')
        return false
    }

    return true
}


export default Inputvalidator