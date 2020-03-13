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

   ipo:IPO[];
    deleteIPO(ipo:IPO){
      this.ipoServices.deleteIPODetails(ipo.id).subscribe();
      this.ipo = this.ipo.filter(u => u!==ipo);
    }
    updateIPO(ipo:IPO){
      localStorage.removeItem('ipoId');
      localStorage.setItem('ipoId',ipo.id.toString());
      this.router.navigate(['updateIPO']);
  }

  ngOnInit() {
      this.ipoServices.getAllIPO().subscribe(data => {
      this.ipo=data;

      });
    }

}
