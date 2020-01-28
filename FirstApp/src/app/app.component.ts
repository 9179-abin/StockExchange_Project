import { Component } from '@angular/core';
import { User } from './models/user';
import {FormsModule,FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
  // user=new User(101,'Rahul','rahul@gmail.com',1234567890);
  // user1=new User(102,'Ram','ram@gmail.com',12396444);
  // user2=new User(103,'Ron','ron@gmail.com',123213433);
  // user3=new User(104,'Drake','drake@gmail.com',12386785);
  // user4=new User(105,'Dean','dean@gmail.com',12376332);
  // callMe(){
  //   alert('Welcome : '+this.user.name);
  // }
}