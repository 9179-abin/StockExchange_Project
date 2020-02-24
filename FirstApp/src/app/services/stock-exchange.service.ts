import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { STOCK } from '../models/stockExchange';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {

  private httpUrl = 'http://localhost:8080/stocks/'

  constructor(private httpClient:HttpClient) { }

   getAllStocks(): Observable < STOCK[]> {
    return this.httpClient.get< STOCK[]>(this.httpUrl);
  }
  saveStocks(stockExchange:STOCK): Observable<STOCK>{
    return this.httpClient.post<STOCK>("http://localhost:8080/stocks/",stockExchange);
  }
  deleteStockDetails(id:number): Observable<STOCK>{
    return this.httpClient.delete<STOCK>(this.httpUrl+ id);  
  }
  updateStockInfo(stockExchange:STOCK): Observable<STOCK> {
    return this.httpClient.put<STOCK>("http://localhost:8080/stocks/",stockExchange);
  } 
  getStockById(id:number): Observable<STOCK> {
    return this.httpClient.get<STOCK>(this.httpUrl+id);
  }


 
}
