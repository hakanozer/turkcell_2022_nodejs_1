"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const url = "mongodb://localhost:27017/node_project";
const option = {
    useNewUrlParser: true,
    dbName: "node_project",
};
exports.db = mongoose_1.default.connect(url, option);
//# sourceMappingURL=db.js.map