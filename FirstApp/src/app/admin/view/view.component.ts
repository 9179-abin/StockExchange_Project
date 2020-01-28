import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private userServices: UserService) { }
  users : User[];
  navbarOpen = false;
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  deleteUser(user:User){
    this.userServices.deleteUser(user.id).subscribe();
    this.users = this.users.filter(u => u!==user);
  }
  ngOnInit() {
    // this.users= this.userServices.getAllUsers();
    this.userServices.getAllUsers().subscribe(data => {
      this.users=data;
    });
    
  }

}
