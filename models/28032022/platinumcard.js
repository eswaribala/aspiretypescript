"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//inheritance
var beneficiary_1 = require("./beneficiary");
var Card = beneficiary_1.Bank.Card;
var PlatinumCard = /** @class */ (function (_super) {
    __extends(PlatinumCard, _super);
    function PlatinumCard(cardNo, cardHolderName, expiryDate, offer, limit, balance) {
        var _this = _super.call(this, cardNo, cardHolderName, expiryDate, balance) || this;
        _this.offer = offer;
        _this.limit = limit;
        return _this;
    }
    PlatinumCard.prototype.compute = function () {
        this.limit = this.balance * .5;
    };
    return PlatinumCard;
}(Card));
//static variable and static method
Card.bankName = 'HSBC';
//console.log(PlatinumCard.bankName);
var platinumCard = new PlatinumCard(24858234324, 'Parameswari', new Date(2025, 1, 1), 0.1, 0, 600000);
platinumCard.compute();
console.log(platinumCard.limit);
Card.getBankName();
