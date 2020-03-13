import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersidenav',
  templateUrl: './usersidenav.component.html',
  styleUrls: ['./usersidenav.component.css']
})
export class UsersidenavComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  logout(){
    this.auth.logout();
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
