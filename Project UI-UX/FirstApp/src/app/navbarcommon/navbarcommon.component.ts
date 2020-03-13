import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-navbarcommon',
  templateUrl: './navbarcommon.component.html',
  styleUrls: ['./navbarcommon.component.css']
})
export class NavbarcommonComponent implements OnInit {
  isAdmin:number;
  navbarOpen = false;
  message:String;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private auth:AuthService,private router:Router) { }
  Onmessage(){
    this.message="Access Denied! Login as User/Admin"
    $('#myModal').modal('show');
    // $.MessageBox("A plain MessageBox can replace Javascript's window.alert(), and it looks definitely better...");
  }
  
  ngOnInit() {
  }

}
