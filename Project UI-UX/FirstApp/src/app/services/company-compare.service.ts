import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyCompareService {
  private httpUrl=environment.host +'company-service/company/';
  constructor(private httpClient:HttpClient) { }

  getAllCompany(): Observable <Company[]> {
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
}
