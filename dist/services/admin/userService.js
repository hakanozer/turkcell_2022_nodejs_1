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
exports.userFindId = exports.userLoginControl = exports.userEmailControl = exports.userSave = void 0;
const UserModel_1 = require("../../models/UserModel");
const db_1 = require("../../utils/db");
const userSave = (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    /*
    db.then( item => {
        UserModel.create({ name, email, password }).then( item => {
            console.log("Save Success", item);
            console.log("ID", item.id);
        })
    })
    */
    yield db_1.db;
    return yield UserModel_1.UserModel.create({ name, email, password });
});
exports.userSave = userSave;
const userEmailControl = (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.db;
    return yield UserModel_1.UserModel.findOne({ email: email });
});
exports.userEmailControl = userEmailControl;
const userLoginControl = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.db;
    return yield UserModel_1.UserModel.findOne({ email, password });
});
exports.userLoginControl = userLoginControl;
const userFindId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.db;
    return yield UserModel_1.UserModel.findById(id);
});
exports.userFindId = userFindId;
//# sourceMappingURL=userService.js.map