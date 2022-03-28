"use strict";
exports.__esModule = true;
exports.Bank = void 0;
var Bank;
(function (Bank) {
    var Beneficiary = /** @class */ (function () {
        function Beneficiary(firstName, lastName, accountNo, ifscCode) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.accountNo = accountNo;
            this.ifscCode = ifscCode;
        }
        //method
        Beneficiary.prototype.notify = function (amount) {
            console.log("The Amount transferred=", amount);
        };
        return Beneficiary;
    }());
    Bank.Beneficiary = Beneficiary;
    var Card = /** @class */ (function () {
        function Card(cardNo, cardHolderName, expiryDate, balance) {
            this.cardNo = cardNo;
            this.cardHolderName = cardHolderName;
            this.expiryDate = expiryDate;
            this.balance = balance;
        }
        Card.getBankName = function () {
            console.log(Card.bankName);
        };
        return Card;
    }());
    Bank.Card = Card;
})(Bank = exports.Bank || (exports.Bank = {}));
