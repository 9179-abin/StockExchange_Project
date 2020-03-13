import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  val:number
  // constructor() { }
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {

    this.route.data.subscribe(params => {
      this.val = params['val'];
      });
      // alert('Welcome : '+this.val);
  }

}
