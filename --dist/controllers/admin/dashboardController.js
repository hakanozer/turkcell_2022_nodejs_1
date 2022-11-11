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
exports.dashboardController = void 0;
const express_1 = __importDefault(require("express"));
const customerService_1 = require("../../services/admin/customerService");
exports.dashboardController = express_1.default.Router();
exports.dashboardController.get('/dashboard', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    yield (0, customerService_1.allCustomer)((_a = req.session.item) === null || _a === void 0 ? void 0 : _a.id).then(items => {
        res.render('admin/dashboard', { items: items });
    });
}));
// customer add
exports.dashboardController.post('/customerAdd', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const name = req.body.name;
    const phone = req.body.phone;
    const color = req.body.color;
    yield (0, customerService_1.customerAdd)(name, phone, color, (_b = req.session.item) === null || _b === void 0 ? void 0 : _b.id).then(item => {
        console.log("Insert Success");
    });
    res.redirect('../admin/dashboard');
}));
// customer delete
exports.dashboardController.get('/customerDelete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    console.log(req.query.id);
    yield (0, customerService_1.customerDelete)((_c = req.session.item) === null || _c === void 0 ? void 0 : _c.id, String(req.query.id)).then(item => {
        console.log("Delete Success");
    });
    res.redirect('../admin/dashboard');
}));
//# sourceMappingURL=dashboardController.js.map