import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from './login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/admin/login';
  constructor(private http: HttpClient) { }
  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}`, loginRequest);
  }
}
