import { Component, OnInit } from '@angular/core';
import { CompanyCompareService } from 'src/app/services/company-compare.service';
import { Company } from 'src/app/models/company';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-comparecharts',
  templateUrl: './comparecharts.component.html',
  styleUrls: ['./comparecharts.component.css']
})
export class ComparechartsComponent implements OnInit {
  compare:FormGroup;
  constructor(private service:CompanyCompareService, private formBuilder:FormBuilder, private router:Router) { }
  company : Company[];
  options: string[];
  i:number;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  compareCompany(){
    localStorage.removeItem("c1");
    localStorage.removeItem("c2");
    localStorage.setItem("c1",this.compare.value['comp']);
    localStorage.setItem("c2",this.compare.value['compa']);
    this.router.navigate(['/showcharts']);

    
  }
  ngOnInit() {
    this.service.getAllCompany().subscribe(data =>{
      this.company=data;
    });
    this.compare = this.formBuilder.group({
      comp:[''],
      compa:['']

    });
    
      

    
    
  }
 

}
