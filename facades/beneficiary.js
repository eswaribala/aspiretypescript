"use strict";
exports.__esModule = true;
exports.Beneficiary = void 0;
var Beneficiary = /** @class */ (function () {
    function Beneficiary() {
    }
    Beneficiary.prototype.updateBalance = function (print) {
        if (print) {
            console.log("Printing....");
        }
    };
    return Beneficiary;
}());
exports.Beneficiary = Beneficiary;
var beneficiary = new Beneficiary();
beneficiary.transactionId = 325780375;
beneficiary.dot = new Date(2022, 1, 1);
beneficiary.amount = 43659346;
beneficiary.updateBalance(true);
