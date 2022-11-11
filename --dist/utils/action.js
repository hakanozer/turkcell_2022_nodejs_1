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
exports.fncCall = void 0;
const fnc1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fnc1 Call");
            resolve(true);
        }, 3000);
    });
};
const fnc2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fnc2 Call");
            resolve(true);
        }, 2000);
    });
};
const fnc3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fnc3 Call");
            resolve(true);
        }, 1000);
    });
};
const fncCall = () => __awaiter(void 0, void 0, void 0, function* () {
    fnc1().then(() => {
        fnc2().then((() => {
            fnc3().then(() => {
                console.log("All Fnc Finsh");
            }).catch(() => {
            });
        })).catch(() => {
        });
    }).catch(() => {
    });
    console.log("This Line Call");
    /*
    await fnc1()
    await fnc2()
    await fnc3()
    console.log("All Fnc Finsh");
    */
});
exports.fncCall = fncCall;
//# sourceMappingURL=action.js.map