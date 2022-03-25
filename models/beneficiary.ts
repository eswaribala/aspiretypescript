class Beneficiary{
    //fields
    private _firstName:string;
    private _lastName:string;
    private _accountNo:number;
    private _ifscCode:string;
    constructor(firstName:string,lastName:string,
                accountNo:number,ifscCode:string) {
        this._firstName=firstName;
        this._lastName=lastName;
        this._accountNo=accountNo;
        this._ifscCode=ifscCode;
    }
    //properties

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get accountNo(): number {
        return this._accountNo;
    }

    get ifscCode(): string {
        return this._ifscCode;
    }
}

//object
let beneficiary:Beneficiary=new Beneficiary("Shantha","Kumari",
    482872846832,"UTI00032465");
console.log(beneficiary);
