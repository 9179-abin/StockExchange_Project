import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // users = USERS;
  private httpUrl=environment.host + 'user-service/users/';
  private httpUrls=environment.host + 'user-service/useractivate/';
  constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }

  getAllUsers(): Observable <User[]> {
    return this.httpClient.get<User[]>(environment.host + "user-service/users/");
  }
  saveUser (user:User){
    return this.ht.post(environment.host + "user-service/add/", user);
  }
  deleteUser(id:number): Observable<User> {
    return this.httpClient.delete<User>(this.httpUrl+ id);
  }
  updateUserInfo(user:User){
    return this.ht.put(environment.host + "user-service/users/",user);
  } 
  getUserById(id:number): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl+id);
  }
  serviceActivation(obj){
    return this.ht.put(environment.host + "user-service/activate/",obj)
  }
  // activatemessage(obj){
  //   return this.httpClient.get("http://localhost:8080/activate");
  // }
  // isAdmin() : boolean{
  //   return true;
  // }
}
