import {Transaction} from "./transaction";

export class Beneficiary implements  Transaction{
    amount: number;
    dot: Date;
    transactionId: number;

    updateBalance(print: Boolean): void {
        if(print){
            console.log("Printing....")
        }
    }

}

let beneficiary=new Beneficiary();
beneficiary.transactionId=325780375;
beneficiary.dot=new Date(2022,1,1);
beneficiary.amount=43659346;
beneficiary.updateBalance(true);
