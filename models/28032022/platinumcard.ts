//inheritance
import {Bank} from "./beneficiary";
import Card = Bank.Card;

class PlatinumCard extends Card{
    offer:number;
    limit:number;

    constructor(cardNo: number, cardHolderName: string,
                expiryDate: Date, offer: number, limit: number,balance:number) {
        super(cardNo, cardHolderName, expiryDate,balance);
        this.offer = offer;
        this.limit = limit;
    }

    compute(): void {
        this.limit= this.balance*.5;
    }
}
//static variable and static method
Card.bankName='HSBC';

let platinumCard:PlatinumCard=new PlatinumCard(24858234324,
    'Parameswari',new Date(2025,1,1),
    0.1,0,600000);

platinumCard.compute();
console.log(platinumCard.limit);
//static methods cannot be inherited
Card.getBankName();
