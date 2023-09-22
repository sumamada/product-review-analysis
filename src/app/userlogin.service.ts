import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './user.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  private apiUrl = 'http://localhost:8080/api/v1/user/login';
  constructor(private http: HttpClient) { }
  login(user: UserResponse): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.apiUrl, user);
  }
}
