import {Bank} from "./beneficiary";

let amount=83844;
//object
let beneficiary:Bank.Beneficiary=new Bank.Beneficiary("Shantha","Kumari",
    482872846832,"UTI00032465");

beneficiary.notify(amount);

