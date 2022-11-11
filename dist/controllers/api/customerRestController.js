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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRestController = void 0;
const express_1 = __importDefault(require("express"));
const customerService_1 = require("../../services/admin/customerService");
const userService_1 = require("../../services/admin/userService");
exports.customerRestController = express_1.default.Router();
exports.customerRestController.post('/login', (req, res) => {
    const user = req.body;
    (0, userService_1.userLoginControl)(user.email, user.password).then(userItem => {
        if (userItem) {
            req.session.item = {
                id: userItem.id,
                name: userItem.name,
                email: userItem.email,
                password: userItem.password
            };
            const sendItem = {
                status: true,
                result: userItem
            };
            res.json(sendItem);
        }
        else {
            const sendItem = {
                status: false,
                result: 'UserName or Password Fail'
            };
            res.json(sendItem);
        }
    });
});
exports.customerRestController.post('/add', (req, res) => {
    var _a;
    const userID = (_a = req.session.item) === null || _a === void 0 ? void 0 : _a.id;
    const name = req.body.name;
    const phone = req.body.phone;
    const color = req.body.color;
    (0, customerService_1.customerAdd)(name, phone, color, userID).then(item => {
        if (item) {
            const sendItem = {
                status: true,
                result: item
            };
            res.json(sendItem);
        }
        else {
            const sendItem = {
                status: false,
                result: 'Insert Fail'
            };
            res.json(sendItem);
        }
    });
});
exports.customerRestController.get('/list', (req, res) => {
    var _a;
    const userID = (_a = req.session.item) === null || _a === void 0 ? void 0 : _a.id;
    (0, customerService_1.allCustomer)(userID).then(response => {
        const sendItem = {
            status: true,
            result: response
        };
        res.json(sendItem);
    });
});
exports.customerRestController.get('/delete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userID = (_a = req.session.item) === null || _a === void 0 ? void 0 : _a.id;
    const id = req.body.id;
    try {
        yield (0, customerService_1.customerDelete)(userID, id).then(() => {
            const sendItem = {
                status: true,
                result: "Delete Success"
            };
            res.json(sendItem);
        });
    }
    catch (error) {
        const sendItem = {
            status: false,
            result: "Delete Fail"
        };
        res.json(sendItem);
    }
}));
//# sourceMappingURL=customerRestController.js.map