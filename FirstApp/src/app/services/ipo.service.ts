import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPO } from '../models/ipo';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  httpUrl='http://localhost:1200/ipo/';

  constructor(private httpClient:HttpClient ) { }

   getAllIPO(): Observable <IPO[]> {
    return this.httpClient.get<IPO[]>(this.httpUrl);
  }
}
