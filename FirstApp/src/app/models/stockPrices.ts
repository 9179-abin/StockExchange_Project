import { Time } from '@angular/common';

export class StockPrices {
    cid:number;
    stockExchange: string;
    currentPrice:number;
    date:Date;
    time:Time;

    constructor(cid:number, stockExchange:string, currentPrice:number, date:Date, time:Time ){
       this.cid=cid;
       this.currentPrice=currentPrice;
       this.stockExchange=stockExchange;
       this.date=date;
       this.time=time; 
    }

}