import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{StockPrices} from '../models/stockPrices';
@Injectable({
  providedIn: 'root'
})
export class StockPricesService {

  private httpUrl='http://localhost:8080/stockprice/';

  constructor(private httpClient:HttpClient, @Inject (HttpClient) private ht ) { }

  getAllIPO(): Observable <StockPrices[]> {
    return this.httpClient.get<StockPrices[]>(this.httpUrl);
  }

  saveStockPrices(stockprice:StockPrices): Observable<StockPrices>{
    return this.ht.post(this.httpUrl,stockprice);
  }

  deleteIPODetails(id:number): Observable<StockPrices> {
    return this.httpClient.delete<StockPrices>(this.httpUrl+ id);
  }
  updateIPOInfo(stockprice:StockPrices): Observable<StockPrices> {
    return this.httpClient.put<StockPrices>(this.httpUrl,stockprice);
  } 
  getIPOById(id:number): Observable<StockPrices> {
    return this.httpClient.get<StockPrices>(this.httpUrl+id);
  }


}
