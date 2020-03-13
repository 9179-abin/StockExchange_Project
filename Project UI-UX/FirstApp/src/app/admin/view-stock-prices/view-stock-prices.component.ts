import { Component, OnInit } from '@angular/core';
import { StockPricesService } from 'src/app/services/stock-prices.service';
import { Router } from '@angular/router';
import { StockPrices } from 'src/app/models/stockPrices';

@Component({
  selector: 'app-view-stock-prices',
  templateUrl: './view-stock-prices.component.html',
  styleUrls: ['./view-stock-prices.component.css']
})
export class ViewStockPricesComponent implements OnInit {

  constructor(private stockPriceServices : StockPricesService, private router : Router ) { }
  stockprice : StockPrices[];

  deleteStockPrice(stp:StockPrices){
    this.stockPriceServices.deleteStockPriceDetails(stp.cid).subscribe();
    this.stockprice = this.stockprice.filter(u => u!==stp);
  }

  updateStockPrice(stp:StockPrices){
    localStorage.removeItem('ucid');
    localStorage.setItem('ucid',stp.cid.toString());
    this.router.navigate(['updateStockPrice']);
  }
  ngOnInit() {
    this.stockPriceServices.getAllStockPrices().subscribe(data => {
      this.stockprice=data;
      console.log(data);
    })

  }

}
