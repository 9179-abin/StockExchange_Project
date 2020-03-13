import { Component, OnInit } from '@angular/core';
import {STOCK } from 'src/app/models/stockExchange';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-stocks',
  templateUrl: './view-stocks.component.html',
  styleUrls: ['./view-stocks.component.css']
})
export class ViewStocksComponent implements OnInit {


  constructor(private stockservices: StockExchangeService, private router : Router) { }
  stocks : STOCK[];
  deleteStocks(stockExchange:STOCK){
    this.stockservices.deleteStockDetails(stockExchange.id).subscribe();
    this.stocks = this.stocks.filter(u => u!==stockExchange);
  }
  updateStocks(stockExchange:STOCK){
    localStorage.removeItem('stockId');
    localStorage.setItem('stockId',stockExchange.id.toString());
    this.router.navigate(['updateStock']);
}

  ngOnInit() {

    this.stockservices.getAllStocks().subscribe(data => {
      this.stocks=data;
    });
  }

}
