import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPO } from '../models/ipo';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  private httpUrl='http://localhost:1200/ipo/';

  constructor(private httpClient:HttpClient ) { }

   getAllIPO(): Observable <IPO[]> {
    return this.httpClient.get<IPO[]>(this.httpUrl);
  }
  saveIPO(ipo:IPO): Observable<IPO>{
    return this.httpClient.post<IPO>(this.httpUrl,ipo);
  }
  deleteIPODetails(id:number): Observable<IPO> {
    return this.httpClient.delete<IPO>(this.httpUrl+ id);
  }
  updateIPOInfo(ipo:IPO): Observable<IPO> {
    return this.httpClient.put<IPO>(this.httpUrl+ipo.id,ipo);
  } 
  getIPOById(id:number): Observable<IPO> {
    return this.httpClient.get<IPO>(this.httpUrl+id);
  }
}
