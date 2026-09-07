"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let commands = require('./commandDefiner');
function commandParser(command, ...args) {
    let inputs = args.slice();
    if (command in commands) {
        commands[command](inputs);
    }
}
module.exports = { Parser: commandParser };
//# sourceMappingURL=commandParser.js.map