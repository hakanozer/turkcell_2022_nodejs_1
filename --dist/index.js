"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const util_1 = require("./utils/util");
const action_1 = require("./utils/action");
const fileUsing_1 = require("./utils/fileUsing");
(0, action_1.fncCall)();
(0, fileUsing_1.createData)();
(0, fileUsing_1.readData)();
const app = (0, express_1.default)();
const port = 8080;
// cookie config
app.use((0, cookie_parser_1.default)());
// session config
const sessionKey = process.env.SESSION_KEY;
const sesionConfig = (0, express_session_1.default)({
    secret: sessionKey,
    resave: false,
    saveUninitialized: true,
});
app.use(sesionConfig);
/*
import { userEmailControl, userSave } from "./services/admin/userService";
userEmailControl("ali@mail.com").then(emailItem => {
    if (!emailItem) {
        userSave("Ali Bilirler", "ali@mail.com", "12345").then(item => {
            console.log(item);
        })
    }
})
*/
// EJS config
app.set("views", path_1.default.join(__dirname, "views"));
app.set('view engine', 'ejs');
// body-parser config
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// global filter
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.url;
    // admin Control
    if (url.includes('/api') || url === '/admin' || url === '/admin/login') {
        next();
    }
    else {
        // cookie control
        if (req.cookies.admin && req.cookies.admin !== '') {
            let id = req.cookies.admin;
            id = (0, util_1.decrypt)(id);
            yield (0, userService_1.userFindId)(id).then(user => {
                if (user) {
                    req.session.item = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        password: user.password
                    };
                }
            });
        }
        if (!req.session.item) {
            res.redirect('../admin');
        }
        else {
            res.locals.user = req.session.item;
            next();
        }
    }
}));
// site import controller
const homeController_1 = require("./controllers/site/homeController");
// site router
app.use('/', homeController_1.homeController);
// admin import controller
const loginController_1 = require("./controllers/admin/loginController");
const dashboardController_1 = require("./controllers/admin/dashboardController");
const settingsController_1 = require("./controllers/admin/settingsController");
const userService_1 = require("./services/admin/userService");
const detailController_1 = require("./controllers/admin/detailController");
// admin router
app.use('/admin', [
    loginController_1.loginController,
    dashboardController_1.dashboardController,
    settingsController_1.settingsController,
    detailController_1.detailController
]);
// api controller
const customerRestController_1 = require("./controllers/api/customerRestController");
app.use('/api', [
    customerRestController_1.customerRestController
]);
app.listen(port, () => {
    console.log('http://localhost:' + port);
});
//# sourceMappingURL=index.js.map