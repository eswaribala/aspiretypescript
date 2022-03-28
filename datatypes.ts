//optional types supported by ts

//variables
let firstName:string;
let lastName:string;
let dob:Date;
let availability:boolean;
let memberId:number;
enum gender{MALE,FEMALE,TRANSGENDER};
let memberGender:gender;
let addressObj:any={
    "streetName":"8th street",
    "city":"Chennai",
    "state":"TamilNadu"
}
let mobileNos:number[]=[32585328,4295692469,4275084757,3470870]
let skillSet:string[]=["java","c#","ts","js","cj"]

//tuple
let customer:[[number, string, boolean], (number | string | boolean)[], (number | string | boolean)[]];

customer=[[32879,'customer1',true],[32879,'customer1',true],[32879,'customer1',true]]


// assign the literals
firstName="Parameswari";
lastName="Bala";
dob=new Date(1980,3,3);
availability=true;
memberId=4287832;
memberGender=gender.FEMALE;
let genderValue=gender[memberGender]
//show the output
console.log({firstName,lastName,dob,availability,memberId,genderValue,addressObj,mobileNos,skillSet});
//console.log(skillSet[0]);
//iteration
let searchData="c#"
/*
skillSet.forEach(skill=>{

   if(skill==searchData)
       console.log(skill);
})

 */
console.log(skillSet.filter(skill=>skill==searchData));
