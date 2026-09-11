"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Inputvalidator(inputs, argsRequired, argsOptional) {
    if (inputs.length > (argsRequired + argsOptional)) {
        console.log('too many arguements provided for command');
        return false;
    }
    else if (inputs.length < argsRequired) {
        console.log('too few arguements provided for command');
        return false;
    }
    return true;
}
exports.default = Inputvalidator;
//# sourceMappingURL=inputvalidator.js.map