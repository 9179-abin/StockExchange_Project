export class STOCK {
    id: number;
    stockExchanges : string;
    aboutSE:string;
    address:string;
    constructor(id: number, name:string, aboutSE:string, address:string){
        this.id=id;
        this.stockExchanges=name;
        this.aboutSE=aboutSE;
        this.address=address;
    }
}