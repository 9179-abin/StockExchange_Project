import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stockExchange } from '../models/stockExchange';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {

  httpUrl:'http://localhost:1300/stockExchanges/'

  constructor(private httpClient:HttpClient) { }

   getAllStocks(): Observable <stockExchange[]> {
    return this.httpClient.get<stockExchange[]>(this.httpUrl);
  }


 
}
