"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsController = void 0;
const express_1 = __importDefault(require("express"));
const store_1 = __importDefault(require("store"));
const api_1 = require("../../utils/api");
exports.settingsController = express_1.default.Router();
let arr = [];
exports.settingsController.get('/settings', (req, res) => {
    (0, api_1.allProduct)().then(item => {
        arr = item.data.Products[0].bilgiler;
        res.render('admin/settings', { arr: arr });
    });
});
exports.settingsController.get('/productDetail', (req, res) => {
    const stIndex = req.query.index;
    const index = parseInt(stIndex);
    const item = arr[index];
    //localStorage.setItem('item', JSON.stringify(item))
    store_1.default.set('item', item);
    res.redirect('../admin/detail');
});
//# sourceMappingURL=settingsController.js.map