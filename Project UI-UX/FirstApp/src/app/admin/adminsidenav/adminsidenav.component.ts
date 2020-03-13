import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsidenav',
  templateUrl: './adminsidenav.component.html',
  styleUrls: ['./adminsidenav.component.css']
})
export class AdminsidenavComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  logout(){
    this.auth.logout();
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
