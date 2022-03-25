//void function
function getCustomerData(customerData:string[]):void{
    customerData.forEach(customer=>{
        console.log(customer)
    })
}
let customerInfo:string[]=["Parameswari","Bala","vignesh"]
//invoke the function
getCustomerData(customerInfo)

//default or optional

function getTransaction(transactionId:number,amount:number,tranDate:Date=new Date()):any{
 let tranObj={
     "transactionId":transactionId,
      "amount":amount,
     "tranDate":tranDate
 }
 return tranObj;
}

console.log(getTransaction((Math.round(Math.random()*100000)),100000));
console.log(getTransaction(Math.round(Math.random()*100000),100000,
    new Date(2022,3,3)));


//rest param should always be last parameter

function getEmployeeData(empName:string,...skillSet ):void{
console.log({empName,skillSet})
}
getEmployeeData("Suman");
getEmployeeData("Anita","c#");
getEmployeeData("Aman","c#","java");
getEmployeeData("AmanRaj","c#","java","python");
