"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const express_1 = __importDefault(require("express"));
const userService_1 = require("../../services/admin/userService");
const util_1 = require("../../utils/util");
exports.loginController = express_1.default.Router();
// get login
let errorMessage = '';
exports.loginController.get('/', (req, res) => {
    if (req.session.item && req.session.item.id !== '') {
        res.redirect('../admin/dashboard');
    }
    else {
        res.render('admin/login', { errorMessage: errorMessage });
        errorMessage = '';
    }
});
// post login
exports.loginController.post('/login', (req, res) => {
    try {
        const user = req.body;
        if (user.email === undefined || user.password === undefined || user.email === '' || user.password === '') {
            throw new Error("email or password null or empty");
        }
        (0, userService_1.userLoginControl)(user.email, user.password).then(userItem => {
            if (userItem) {
                // sessinon create
                req.session.item = {
                    id: userItem.id,
                    name: userItem.name,
                    email: userItem.email,
                    password: userItem.password
                };
                // cookie control
                if (user.remember !== undefined && user.remember === 'on') {
                    res.cookie('admin', (0, util_1.encrypt)(userItem.id), { maxAge: (1000 * 60 * 60 * 24), secure: true });
                }
                res.redirect('../admin/dashboard');
            }
            else {
                errorMessage = 'Username or Password Fail';
                res.redirect('../admin');
            }
        });
    }
    catch (error) {
        console.log("Login Error :", error.message);
        errorMessage = error.message;
        res.redirect('../admin');
    }
});
// logout
exports.loginController.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (!err) {
            res.cookie('admin', '', { maxAge: 0 });
            res.redirect('../admin');
        }
    });
});
//# sourceMappingURL=loginController.js.map