import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlanding',
  templateUrl: './userlanding.component.html',
  styleUrls: ['./userlanding.component.css']
})
export class UserlandingComponent implements OnInit {

  constructor(private router:Router) { }

  logout(){
    sessionStorage.removeItem("userType");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
