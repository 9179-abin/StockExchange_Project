export class Company {
    id:number;
    companyName : string;
    city:string;
    state:string;
    pincode : number;
    turnover : number;
    aboutCompany: string;
    stockExchange: string;
    sector: string;
    constructor(id:number,name : string, city:string, state:string, pincode : number,
        turnover : number, aboutCompany: string, stockExchange: string, 
         sector: string){
        this.id=id;
        this.companyName=name;
        this.city=city;
        this.state=state;
        this.pincode=pincode;
        this.turnover=turnover;
        this.aboutCompany=aboutCompany;
        this.stockExchange=stockExchange;
        this.sector=sector;
    }
}