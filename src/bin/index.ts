#!/usr/bin/env node
const {Parser}=require('../commandParser');

let inputs=process.argv.slice(2,);
console.log("Inputs entered:",inputs)

let command=inputs[0];
let commandInputs=inputs.slice(1,);


command?Parser(command,...commandInputs):console.log('No command specified')
