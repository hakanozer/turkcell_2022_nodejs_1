"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const CustomerSchema = new Schema({
    name: String,
    phone: String,
    color: String,
    userID: String
});
exports.CustomerModel = mongoose_1.default.model('customer', CustomerSchema);
//# sourceMappingURL=CustomerModel.js.map