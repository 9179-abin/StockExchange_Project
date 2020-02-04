export class IPO {
    id:number;
    name : string;
    stockExchange: string;
    priceShare : number;
    noOfShare : number;
    Address: string;
    city:string;
    state:string;
    pincode : number;
    date : Date;
    constructor(id:number, name:string, stockExchange: string, priceShare : number, noOfShare : number, Address: string, city:string, state:string, pincode : number, date: Date){
        this.id=id;
        this.name=name;
        this.stockExchange=stockExchange;
        this.priceShare=priceShare;
        this.noOfShare=noOfShare;
        this.Address=Address;
        this.city=city;
        this.state=state;
        this.pincode=pincode;
        this.date=date;
      
        
    }
}