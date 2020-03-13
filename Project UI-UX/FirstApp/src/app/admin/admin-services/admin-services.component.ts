import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.css']
})
export class AdminServicesComponent implements OnInit {

  constructor(private router: Router) { }
  navbarOpen = false;
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  
  }
  logout(){
    sessionStorage.removeItem("userType");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
