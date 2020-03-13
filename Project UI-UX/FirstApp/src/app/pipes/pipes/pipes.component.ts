import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  
  message:string;
  price:number;
  salary: number;
  dob:Date;
  user={
    id:1001,
    name:'CTS'
  }
  constructor() { }

  ngOnInit() {
    this.message='Today is 30th January 2020';
    this.price=500000;
    this.salary=4500.55644;
    this.dob=new Date(1999,10,20);
  }

}
