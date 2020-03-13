import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  private httpUrl=environment.host + 'stock-price-service/stockPrices/';
  constructor(private httpClient: HttpClient) { }

  uploadStockSheet(formData:FormData): Observable<void>{
    return this.httpClient.post<void>(this.httpUrl+"uploadStockSheet",formData);
  }

}
