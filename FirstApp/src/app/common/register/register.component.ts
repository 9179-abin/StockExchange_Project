import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // signupForm: FormGroup;
  registerUser: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  // onSubmit() {
  //    console.log(this.signupForm.value);
  //   }
    navbarOpen = false;
  
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }

    addUser() {
      this.userService.saveUser(this.registerUser.value).subscribe(data => {
        console.log("User inserted successfully"+data);
      });
    }
    onSubmit() {
      console.log(this.registerUser.value);
    }
  
  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   'username': new FormControl(null),
    //   'password1':new FormControl(null),
    //   'password2':new FormControl(null),
    //   'email':new FormControl(null),
    //   'phone':new FormControl(null)
    // });

    this.registerUser = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      password1: ['',Validators.required],
      password2: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

    

    
  }

}
