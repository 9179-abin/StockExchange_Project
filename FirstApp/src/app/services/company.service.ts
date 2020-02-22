import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Company } from '../models/company';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  private httpUrl='http://localhost:8080/company/';
  constructor(private httpClient:HttpClient, @Inject (HttpClient) private ht) { }
  getAllCompanies(): Observable <Company[]>{
    return this.httpClient.get<Company[]>("http://localhost:8080/company/");
  }
  saveCompany(company:Company): Observable<Company>{
    return this.httpClient.post<Company>(this.httpUrl, company);
  }
  deleteCompanyDetails(id:number): Observable<Company>{
    return this.httpClient.delete<Company>(this.httpUrl+ id);
  }
  updateCompanyInfo(company:Company): Observable<Company> {
    return this.httpClient.put<Company>("http://localhost:8080/company/",company);
  } 
  getCompanyById(id:number): Observable<Company> {
    return this.httpClient.get<Company>(this.httpUrl+id);
  }
}
