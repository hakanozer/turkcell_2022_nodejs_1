"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const key = process.env.SECRET_KEY !== undefined ? process.env.SECRET_KEY : '';
// Encrypt
const encrypt = (plainText) => {
    const cipherText = crypto_js_1.default.AES.encrypt(plainText, key).toString();
    return cipherText;
};
exports.encrypt = encrypt;
const decrypt = (cipherText) => {
    const bytes = crypto_js_1.default.AES.decrypt(cipherText, key);
    const plainText = bytes.toString(crypto_js_1.default.enc.Utf8);
    return plainText;
};
exports.decrypt = decrypt;
//# sourceMappingURL=util.js.map