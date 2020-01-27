import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup
  constructor() { }
  onSubmit() {
     console.log(this.signupForm.value);
    }
  
  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'password1':new FormControl(null),
      'password2':new FormControl(null),
      'email':new FormControl(null),
      'phone':new FormControl(null)
    });
    
  }

}
