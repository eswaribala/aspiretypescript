export module Bank {
    export class Beneficiary {
        //fields
        firstName: string;
        lastName: string;
        accountNo: number;
        ifscCode: string;

        constructor(firstName: string, lastName: string,
                    accountNo: number, ifscCode: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.accountNo = accountNo;
            this.ifscCode = ifscCode;
        }

//method
        notify(amount: number) {
            console.log("The Amount transferred=", amount)
        }

    }

    export abstract class Card{
        cardNo:number;
        cardHolderName:string;
        expiryDate:Date;
        static bankName:string;
        balance:number;
        constructor(cardNo: number, cardHolderName: string, expiryDate: Date,balance:number) {
            this.cardNo = cardNo;
            this.cardHolderName = cardHolderName;
            this.expiryDate = expiryDate;
            this.balance=balance;
        }

        abstract compute():void;
        static getBankName(){
            console.log(Card.bankName);
        }

    }


}
