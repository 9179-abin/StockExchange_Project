import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
declare var $:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  val:string;
  n:number;
  i:number;
  valid:boolean;
  isAdmin:boolean;
  message:string;
  loginForm:FormGroup;
  users : User[];
  constructor(private router:Router, public activatedRoute: ActivatedRoute, private services:UserService, private formBuilder:FormBuilder, private auth: AuthService) { }
  signupForm: FormGroup;

  login(){
    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;
    const result = this.auth.authenticate(username, password).subscribe(data=>{
      if(sessionStorage.getItem('userType')==='user'){
        localStorage.removeItem('userId');
        localStorage.setItem('userId',data.id.toString());
        console.log(data);
        if(data.enabled){
          this.message="Login Successfull!";
          // $('#myMess').modal('show');
          this.router.navigate(['/userLanding']);
        }
        else{
          this.message="Please Activate Your Account!";
          // $('#myMess').modal('show');
          this.message="Check your mail for activation Link!";
          // $('#myMess').modal('show');
          this.router.navigate(['/home']);
        }
        
      }
      else if(sessionStorage.getItem('userType')==='admin'){
        this.message="Welcome Admin!";
        // $('#myMess').modal('show');
        this.router.navigate(['/adminservices']);
      }

    },
    error =>{
      console.log(error);
    }
    );
    // console.log(result);
  }



  // onLog()
  // {
    
  //   this.n=this.users.length;
  //   if(this.val=='1')
  //   {
  //     this.isAdmin=true;
  //     for(this.i=0;this.i<this.n;this.i++)
  //     {
  //       if((this.logged.value['name']==='admin') && (this.logged.value['pass']==='password'))
  //       {
  //         console.log(this.users[this.i].username,this.logged.value['name']);
  //         this.valid=true;
  //         break;
  //       }
  //       else{
  //         console.log(this.users[this.i].username,this.logged.value['name']);
  //         this.valid=false;
  //       }
  //     }
  //     if(this.valid===true)
  //     {
  //       alert("Welcome");
  //       localStorage.removeItem('who');
  //       localStorage.setItem('who','admin');
  //       this.router.navigate(['/adminservices']);
  //     }
  //     else{
  //       alert("Wrong Credentials!..Try Again");
  //       this.router.navigate(['/home']);
  //     }

  //   }
  //   else if(this.val=='0')
  //   {
  //     this.isAdmin=false;
  //     for(this.i=0;this.i<this.n;this.i++)
  //     {
  //       if((this.users[this.i].username===this.logged.value['name']) && (this.users[this.i].password1===this.logged.value['pass']))
  //       {
  //         console.log(this.users[this.i].username,this.logged.value['name'])
  //         this.valid=true;
  //         break;
  //       }
  //       else{
  //         console.log(this.users[this.i].username,this.logged.value['name'])
  //         this.valid=false;
  //       }
  //     }
  //     if(this.valid===true)
  //     {
  //       alert("Welcome");
  //       localStorage.removeItem('userId');
  //       localStorage.setItem('userId',this.users[this.i].id.toString());
  //       this.router.navigate(['/userLanding']);
  //     }
  //     else{
  //       alert("Wrong Credentials!..Try Again");
  //       this.router.navigate(['/home']);
  //     }

  //   }  
  // }
  // onAdmin(){
  //   if(this.val=='1'){
  //     this.isAdmin=true;
  //     }
  //   else if(this.val=='0'){
  //     this.isAdmin=false;
  //   }  
  // }
 
  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      username:[''],
      password:['']
    })


  //   this.activatedRoute.paramMap.subscribe(params => { 
  //     this.val = params.get('id'); 
  //     this.onAdmin();
  // });
  // this.services.getAllUsers().subscribe(data =>{
  //   this.users=data;
  // });
      // alert('Welcome : '+this.val);
  }
}

