"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let commands = require('./commandDefiner');
function commandParser(command, ...inputs) {
    if (command in commands) {
        commands[command](inputs);
    }
    else {
        console.log('unknown command provided \n');
        commands['help']();
    }
}
module.exports = { Parser: commandParser };
//# sourceMappingURL=commandParser.js.map