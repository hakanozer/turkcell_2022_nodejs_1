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
exports.allProduct = void 0;
const axios_1 = __importDefault(require("axios"));
const baseUrl = 'https://www.jsonbulut.com/json/';
const ref = 'd1becef32825e5c8b0fc1b096230400b';
// https problem
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
// axios config
const config = axios_1.default.create({
    baseURL: baseUrl,
    timeout: 15000,
    params: { ref: ref },
    //headers: { 'token': 'kj23h4jk23h4jk23' }
});
// all product
const allProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const sendParams = {
        start: '0'
    };
    return yield config.get('product.php', { params: sendParams });
});
exports.allProduct = allProduct;
//# sourceMappingURL=api.js.map