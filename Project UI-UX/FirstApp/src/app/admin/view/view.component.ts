import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private userServices: UserService, private router: Router) { }
  users : User[];
  i:number;
  deleteUser(user:User){
    this.userServices.deleteUser(user.id).subscribe();
    this.users = this.users.filter(u => u!==user);
  }
  updateUser(user:User){
    localStorage.removeItem('userId');
    localStorage.setItem('userId',user.id.toString());
    this.router.navigate(['update-user']);
  }
  ngOnInit() {
    // this.users= this.userServices.getAllUsers();
    this.userServices.getAllUsers().subscribe(data => {
      for(this.i=0;this.i<data.length;this.i++){
        if(!data[this.i].admin)
        {
          this.users=data;
        }
      }
      // this.users=data;
      
    });
    
  }

}
