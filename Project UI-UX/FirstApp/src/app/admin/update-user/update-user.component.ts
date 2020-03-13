import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
declare var $:any;
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
   updateUser: FormGroup;
   navbarOpen = false;
   val:number;
   message:String;
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
  constructor(private formBuilder:FormBuilder, private UserService : UserService, private router: Router, private auth:AuthService) { }
  UpdateUser(){
    this.UserService.updateUserInfo(this.updateUser.value).subscribe(u => {
      if(u.res==1)
      {
        this.auth.logout();
        this.message="Update Successfull!"
        $('#myModal').modal('show');
     
     
    }
      else{
        this.message="Not Updated!"
        $('#myModal').modal('show');
      }
    })
  }
  onSubmit() {
    console.log(this.updateUser.value);
    
    this.router.navigate(['/user-info']);
  }
  ngOnInit() {
    const id = localStorage.getItem('userId');
    // alert(id);
    if(+id > 0){
      this.UserService.getUserById(+id).subscribe(ip =>{
        
        this.updateUser.patchValue(ip);
      });
    }
    this.updateUser=this.formBuilder.group({
      id:[],
      username:['', Validators.required],
      password:['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]

    });
  }
  

}
