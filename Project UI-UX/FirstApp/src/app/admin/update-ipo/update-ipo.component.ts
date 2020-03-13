import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/services/ipo.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPO } from 'src/app/models/ipo';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIPOComponent implements OnInit {
  updateIPO: FormGroup;
  constructor(private formBuilder:FormBuilder, private ipoService:IpoService, private router: Router) { }
  updateIPODetails(){
    this.ipoService.updateIPOInfo(this.updateIPO.value).subscribe(u => {
      alert("Successfully Updated");
      this.router.navigate(['viewIpo']);
    })
  }
  ngOnInit() {
    this.updateIPO=this.formBuilder.group({
      id: ['', Validators.required],
      companyName: ['', Validators.required],
      stockExchange: ['', Validators.required],
      priceShare: ['',Validators.required],
      noOfShares: ['',Validators.required],
      address: [],
      city: ['', Validators.required],
      state: ['',Validators.required],
      pincode: ['',Validators.required],
      date: ['',Validators.required]

  });
  const id = localStorage.getItem('ipoId');
    if(+id > 0){
      this.ipoService.getIPOById(+id).subscribe(user =>{
        this.updateIPO.patchValue(user);
      })
    }
  }

}
