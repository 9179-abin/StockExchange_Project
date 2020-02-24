import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {
  updateStocks:FormGroup;
  constructor(private formBuilder:FormBuilder,private stockservices:StockExchangeService, private router:Router) { }
  updateStocksDetails(){
    this.stockservices.updateStockInfo(this.updateStocks.value).subscribe(u => {
      alert("Successfully Updated");
      this.router.navigate(['viewstocks']);
    });
  }
  ngOnInit() {

    this.updateStocks=this.formBuilder.group({
      id: ['', Validators.required],
      stockExchanges: ['', Validators.required],
      aboutSE: ['', Validators.required],
      address: ['',Validators.required]

  });
  const id = localStorage.getItem('stockId');
    if(+id > 0){
      this.stockservices.getStockById(+id).subscribe(st =>{
        this.updateStocks.patchValue(st);
      })
    }
  }

}
