import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-add-ipo',
  templateUrl: './add-ipo.component.html',
  styleUrls: ['./add-ipo.component.css']
})
export class AddIpoComponent implements OnInit {

  addIPO : FormGroup;
 
  constructor(private formBuilder:FormBuilder,private router:Router, private ipoService:IpoService) { }
  onSubmit(){
    console.log(this.addIPO.value);
    alert("Successfully Inserted");
    this.router.navigate(['/viewIpo']);
  }
  addIPODetails(){
    this.ipoService.saveIPO(this.addIPO.value).subscribe(data => {
      alert("Successfully Inserted");
      console.log("IPO inserted successfully"+data);
    });
  }

  ngOnInit() {

    this.addIPO=this.formBuilder.group({
      id: ['', Validators.required],
      companyName: ['', Validators.required],
      stockExchange: ['', Validators.required],
      priceShare: ['',Validators.required],
      noOfShare: ['',Validators.required],
      address: [],
      city: ['', Validators.required],
      state: ['',Validators.required],
      pincode: ['',Validators.required],
      date: ['',Validators.required]

  });
}

}
