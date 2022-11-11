"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = void 0;
const express_1 = __importDefault(require("express"));
const homeService_1 = require("../../services/site/homeService");
exports.homeController = express_1.default.Router();
exports.homeController.get('/', (req, res) => {
    res.render('site/home', (0, homeService_1.fncInfo)());
});
//# sourceMappingURL=homeController.js.map