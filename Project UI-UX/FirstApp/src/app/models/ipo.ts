export class IPO {
    id:number;
    companyName : string;
    stockExchange: string;
    priceShare : number;
    noOfShares : number;
    address: string;
    city:string;
    state:string;
    pincode : number;
    date : Date;
    constructor(id:number, companyName:string, stockExchange: string, priceShare : number, noOfShares : number, address: string, city:string, state:string, pincode : number, date: Date){
        this.id=id;
        this.companyName=name;
        this.stockExchange=stockExchange;
        this.priceShare=priceShare;
        this.noOfShares=noOfShares;
        this.address=address;
        this.city=city;
        this.state=state;
        this.pincode=pincode;
        this.date=date;
      
        
    }
}