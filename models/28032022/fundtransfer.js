"use strict";
exports.__esModule = true;
var beneficiary_1 = require("./beneficiary");
var amount = 83844;
//object
var beneficiary = new beneficiary_1.Bank.Beneficiary("Shantha", "Kumari", 482872846832, "UTI00032465");
beneficiary.notify(amount);
