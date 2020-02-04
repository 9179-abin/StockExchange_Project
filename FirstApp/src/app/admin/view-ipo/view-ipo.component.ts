import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-ipo',
  templateUrl: './view-ipo.component.html',
  styleUrls: ['./view-ipo.component.css']
})
export class ViewIPOComponent implements OnInit {

  constructor() { }
  navbarOpen = false;
  
  toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }

  ngOnInit() {
      // this.companyService.getAllIPO().subscribe(data => {
      // this.company=data;

  }

}
