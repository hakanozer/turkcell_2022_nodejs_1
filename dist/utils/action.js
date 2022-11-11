"use strict";
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
const fncCall = () => {
    fnc1().then(() => {
        fnc2().then((() => {
            fnc3().then(() => {
                console.log("All Fnc Finsh");
            });
        }));
    });
};
exports.fncCall = fncCall;
//# sourceMappingURL=action.js.map