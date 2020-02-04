import { Component, OnInit } from '@angular/core';
import { IPO } from 'src/app/models/ipo';
import { IpoService } from 'src/app/services/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-ipo',
  templateUrl: './view-ipo.component.html',
  styleUrls: ['./view-ipo.component.css']
})
export class ViewIPOComponent implements OnInit {

  constructor(private ipoServices:IpoService, private router: Router) { }
  navbarOpen = false;
   ipo:IPO[];
  toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }

  ngOnInit() {
      this.ipoServices.getAllIPO().subscribe(data => {
      this.ipo=data;

      });
    }

}
