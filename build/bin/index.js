#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Parser } = require('../commandParser');
let inputs = process.argv.slice(2);
console.log("Inputs entered:", inputs);
let command = inputs[0];
let commandInputs = inputs.slice(1);
command ? Parser(command, ...commandInputs) : console.log('No command specified');
//# sourceMappingURL=index.js.map