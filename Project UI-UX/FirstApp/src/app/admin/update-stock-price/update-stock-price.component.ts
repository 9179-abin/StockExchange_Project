import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockPricesService } from 'src/app/services/stock-prices.service';


@Component({
  selector: 'app-update-stock-price',
  templateUrl: './update-stock-price.component.html',
  styleUrls: ['./update-stock-price.component.css']
})
export class UpdateStockPriceComponent implements OnInit {
  stockPrices:FormGroup;
  constructor( private formBuilder:FormBuilder, private stockPriceServices:StockPricesService, private router:Router) { }
  UpdateStockPriceDetails(){
    this.stockPriceServices.updateStockPriceInfo(this.stockPrices.value).subscribe(u => {
      alert("Successfully Updated");
      this.router.navigate(['viewStockPrice']);
    });
  }
  ngOnInit() {

    this.stockPrices=this.formBuilder.group({
      cid: ['',Validators.required],
      stockExchange: ['', Validators.required],
      currentPrice: ['',Validators.required],
      date: ['',Validators.required],
      time: ['',Validators.required]
  });
  const id = localStorage.getItem('ucid');
    if(+id > 0){
      this.stockPriceServices.getStockPriceById(+id).subscribe(st =>{
        this.stockPrices.patchValue(st);
      })
    }

  }

}
