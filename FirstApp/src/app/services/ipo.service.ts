import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPO } from '../models/ipo';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  private httpUrl='http://localhost:8080/ipo/';

  constructor(private httpClient:HttpClient, @Inject (HttpClient) private ht ) { }

   getAllIPO(): Observable <IPO[]> {
    return this.httpClient.get<IPO[]>(this.httpUrl);
  }
  saveIPO(ipo:IPO): Observable<IPO>{
    return this.ht.post(this.httpUrl,ipo);
  }
  deleteIPODetails(id:number): Observable<IPO> {
    return this.httpClient.delete<IPO>(this.httpUrl+ id);
  }
  updateIPOInfo(ipo:IPO): Observable<IPO> {
    return this.httpClient.put<IPO>(this.httpUrl,ipo);
  } 
  getIPOById(id:number): Observable<IPO> {
    return this.httpClient.get<IPO>(this.httpUrl+id);
  }
}
