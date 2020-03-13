import { Component, OnInit } from '@angular/core';
import { IPO } from 'src/app/models/ipo';
import { IpoService } from 'src/app/services/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-ipo-view',
  templateUrl: './user-ipo-view.component.html',
  styleUrls: ['./user-ipo-view.component.css']
})
export class UserIpoViewComponent implements OnInit {

  ipo:IPO[];
  constructor(private ipoServices:IpoService, private router: Router) { }

  ngOnInit() {
    this.ipoServices.getAllIPO().subscribe(data => {
      this.ipo=data;

      });
    
  }

}
