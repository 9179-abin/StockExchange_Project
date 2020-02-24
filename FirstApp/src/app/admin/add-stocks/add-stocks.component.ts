import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';

@Component({
  selector: 'app-add-stocks',
  templateUrl: './add-stocks.component.html',
  styleUrls: ['./add-stocks.component.css']
})
export class AddStocksComponent implements OnInit {

  addstocks : FormGroup;
  constructor(private formBuilder : FormBuilder, private router : Router, private stockServices : StockExchangeService) { }

  addStockDetails(){
    this.stockServices.saveStocks(this.addstocks.value).subscribe(data => {
      console.log("StockExchange inserted successfully"+data);
    });
  }
  onSubmit() {
    console.log(this.addstocks.value);
    alert("Successfully Inserted");
    this.router.navigate(['/viewstocks']);
  }

  ngOnInit() {

    this.addstocks=this.formBuilder.group({
      id: ['', Validators.required],
      stockExchanges: ['', Validators.required],
      aboutSE: ['', Validators.required],
      address: ['',Validators.required]

  });

  }

}
