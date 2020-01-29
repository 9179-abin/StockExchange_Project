import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
   updateUser: FormGroup;
   navbarOpen = false;
  
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
  constructor(private formBuilder:FormBuilder, private UserService : UserService, private router: Router) { }
  UpdateUser(){
    this.UserService.updateUserInfo(this.updateUser.value).subscribe(u => {
      this.router.navigate(['view']);
    })
  }
  ngOnInit() {
    this.updateUser=this.formBuilder.group({
      id:[],
      name:['', Validators.required],
      password1:['', Validators.required],
      password2:['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]

    })
    const id = localStorage.getItem('userId');
    if(+id > 0){
      this.UserService.getUserById(+id).subscribe(user =>{
        this.updateUser.patchValue(user);
      })
    }
  }
  

}