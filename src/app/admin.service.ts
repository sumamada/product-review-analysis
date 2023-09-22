import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:8080/api/v1/admin/login'; 

  constructor(private http: HttpClient) {}

  adminLogin(adminLogin: { username: string; password: string }): Observable<string> {
    return this.http.post<string>(this.apiUrl, adminLogin);
  }
  
}
