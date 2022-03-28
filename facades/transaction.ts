export interface Transaction{
    transactionId:number;
    dot:Date;
    amount:number;
    updateBalance:(print:Boolean)=>void;
}
/*
//anonymous object
let transaction:Transaction={
    transactionId:3286426,amount:657889,
    dot:new Date(2022,2,3)
}

console.log(transaction);

 */
