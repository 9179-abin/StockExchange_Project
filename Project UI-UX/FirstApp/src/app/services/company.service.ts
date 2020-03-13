import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Company } from '../models/company';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  private httpUrl= environment.host + 'company-service/company/';
  constructor(private httpClient:HttpClient, @Inject (HttpClient) private ht) { }
  getAllCompanies(): Observable <Company[]>{
    return this.httpClient.get<Company[]>(environment.host + "company-service/company/");
  }
  saveCompany(company:Company): Observable<Company>{
    return this.httpClient.post<Company>(this.httpUrl, company);
  }
  deleteCompanyDetails(id:number): Observable<Company>{
    return this.httpClient.delete<Company>(this.httpUrl+ id);
  }
  updateCompanyInfo(company:Company): Observable<Company> {
    return this.httpClient.put<Company>(environment.host + "company-service/company/",company);
  } 
  getCompanyById(id:number): Observable<Company> {
    return this.httpClient.get<Company>(this.httpUrl+id);
  }
}
