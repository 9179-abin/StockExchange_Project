import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import {STOCK } from 'src/app/models/stockExchange';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  addCompany : FormGroup;
  constructor(private formBuilder:FormBuilder, private companyService:CompanyService, private router:Router) { }
  navbarOpen = false;
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  addCompanyDetails(){
    this.companyService.saveCompany(this.addCompany.value).subscribe(data => {
      console.log("Company inserted successfully"+data);
    });
  }
  
  onSubmit(){
    console.log(this.addCompany.value);
  }
  ngOnInit() {
    this.addCompany=this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      city: ['', Validators.required],
      state: ['',Validators.required],
      pincode: ['',Validators.required],
      turnover: ['',Validators.required],
      aboutCompany: [],
      stockExchange: ['',Validators.required],
      sector : ['',Validators.required]
      
    });
    
  }

}
