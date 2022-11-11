"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailController = void 0;
const express_1 = __importDefault(require("express"));
const store_1 = __importDefault(require("store"));
exports.detailController = express_1.default.Router();
exports.detailController.get('/detail', (req, res) => {
    const item = store_1.default.get('item');
    res.render('admin/detail', { item: item });
});
//# sourceMappingURL=detailController.js.map