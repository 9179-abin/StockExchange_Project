import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  httpUrl='http://localhost:1100/company/';
  constructor(private httpClient:HttpClient) { }
  getAllCompanies(): Observable <Company[]>{
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
  saveCompany(company:Company){
    return this.httpClient.post<Company>(this.httpUrl, company);
  }
  deleteCompanyDetails(id:number){
    return this.httpClient.delete<Company>(this.httpUrl+ id);
  }
  updateCompanyInfo(company:Company): Observable<Company> {
    return this.httpClient.put<Company>(this.httpUrl+company.id,company);
  } 
  getCompanyById(id:number): Observable<Company> {
    return this.httpClient.get<Company>(this.httpUrl+id);
  }
}
