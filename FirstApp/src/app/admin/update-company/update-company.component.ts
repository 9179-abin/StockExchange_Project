import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  updateCompany: FormGroup;
  navbarOpen = false;
  
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
  constructor(private formBuilder: FormBuilder, private companyService: CompanyService, private router: Router) { }
  updateCompanyDetails(){
    this.companyService.updateCompanyInfo(this.updateCompany.value).subscribe(u => {
      this.router.navigate(['viewCompany']);
      
    });    
  }
  ngOnInit() {
    this.updateCompany=this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      city: ['', Validators.required],
      state: ['',Validators.required],
      pincode: ['',Validators.required],
      turnover: ['',Validators.required],
      aboutCompany: [],
      stockExchange: ['',Validators.required],
      sector : ['',Validators.required]
    });
    const id = localStorage.getItem('CompanyId');
    if(+id > 0){
      this.companyService.getCompanyById(+id).subscribe(company =>{
        this.updateCompany.patchValue(company);
      })
    }
  }

}
