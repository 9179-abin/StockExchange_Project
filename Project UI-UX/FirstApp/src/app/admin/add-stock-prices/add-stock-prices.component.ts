import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockPricesService } from 'src/app/services/stock-prices.service';

@Component({
  selector: 'app-add-stock-prices',
  templateUrl: './add-stock-prices.component.html',
  styleUrls: ['./add-stock-prices.component.css']
})
export class AddStockPricesComponent implements OnInit {

  addstocksprices: FormGroup;

  constructor(private formBuilder : FormBuilder, private router : Router, private stockPriceServices : StockPricesService) { }
  onSubmit(){
    console.log(this.addstocksprices.value);
    alert("Successfully Inserted");
    this.router.navigate(['/viewStockPrices']);
  }

  addStockPriceDetails(){

    this.stockPriceServices.saveStockPrices(this.addstocksprices.value).subscribe(data =>{
      alert("Successfully Inserted");
      console.log("Stock Prices inserted successfully"+data);
      this.router.navigate(['viewStockPrice']);
    });

  }


  ngOnInit() {
    const cid = localStorage.getItem('cid');
    this.addstocksprices=this.formBuilder.group({
      cid: [+cid],
      stockExchange: ['', Validators.required],
      currentPrice: ['',Validators.required],
      date: ['',Validators.required],
      time: ['',Validators.required]
  });

 

  }

}
