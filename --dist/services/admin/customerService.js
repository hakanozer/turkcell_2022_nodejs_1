"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerDelete = exports.allCustomer = exports.customerAdd = void 0;
const CustomerModel_1 = require("../../models/CustomerModel");
const db_1 = require("../../utils/db");
// Customer Add
const customerAdd = (name, phone, color, userID) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.db;
    return yield CustomerModel_1.CustomerModel.create({ name, phone, color, userID });
});
exports.customerAdd = customerAdd;
// All Customer
const allCustomer = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    if (userID === '636a2e591d58838563614d1d') {
        //for (let i = 0; i < 1000000; i++) { console.log(''); }
    }
    yield db_1.db;
    return yield CustomerModel_1.CustomerModel.find({ userID });
});
exports.allCustomer = allCustomer;
// Customer Delete
const customerDelete = (userID, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.db;
    return yield CustomerModel_1.CustomerModel.findById(id).then((item) => __awaiter(void 0, void 0, void 0, function* () {
        if ((item === null || item === void 0 ? void 0 : item.userID) === userID) {
            yield CustomerModel_1.CustomerModel.findByIdAndDelete(id);
        }
    }));
});
exports.customerDelete = customerDelete;
//# sourceMappingURL=customerService.js.map