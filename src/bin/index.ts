#!/usr/bin/env node
const {Parser}=require('../commandParser');

let consoleInputs=process.argv.slice(2);
let command=consoleInputs[0];
let commandInputs=consoleInputs.slice(1);


Parser(command,commandInputs)