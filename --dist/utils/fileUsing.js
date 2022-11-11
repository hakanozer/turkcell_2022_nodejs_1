"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readData = exports.createData = void 0;
const fs_1 = __importDefault(require("fs"));
const txtPath = 'sample.txt';
const createData = () => {
    fs_1.default.appendFile(txtPath, 'new Datax\n', (item) => {
        console.log(item);
    });
};
exports.createData = createData;
const readData = () => {
    const datas = fs_1.default.readFileSync(txtPath, 'utf-8');
    console.log(datas);
};
exports.readData = readData;
//# sourceMappingURL=fileUsing.js.map