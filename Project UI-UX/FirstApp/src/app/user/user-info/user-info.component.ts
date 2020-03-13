import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user:User;
  constructor(private router: Router, private service:UserService, private auth:AuthService) { }

  updateUser(){
    this.router.navigate(['/update-user']);
  }

  ngOnInit() {
    const c = localStorage.getItem('userId');
    this.service.getUserById(+c).subscribe(data =>{
      this.user=data;
    })


  }

}
