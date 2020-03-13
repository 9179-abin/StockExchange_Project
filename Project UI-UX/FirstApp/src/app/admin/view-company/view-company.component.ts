import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {
  
  constructor(private companyService:CompanyService, private router : Router) { }
  company : Company[];
  navbarOpen = false;
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  deleteCompany(company:Company){
    this.companyService.deleteCompanyDetails(company.id).subscribe();
    this.company = this.company.filter(u => u!==company);
  }
   updateCompany(company:Company){
      localStorage.removeItem('companyId');
      localStorage.setItem('companyId',company.id.toString());
      this.router.navigate(['updateCompany']);
  }

  addStockPrices(company:Company){
    localStorage.removeItem('cid');
    localStorage.setItem('cid',company.id.toString());
    this.router.navigate(['addStockPrices']);
  }

  ngOnInit() {
      this.companyService.getAllCompanies().subscribe(data => {
      this.company=data;
    });

  }

}
