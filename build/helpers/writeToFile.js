"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs/promises');
const writeToFile = async (path, data) => {
    try {
        await fs.writeFile(path, JSON.stringify(data, null, 4));
        console.log('file written to sucessfully');
    }
    catch (err) {
        console.log('Error occured in updating Tasks');
    }
};
exports.default = writeToFile;
//# sourceMappingURL=writeToFile.js.map