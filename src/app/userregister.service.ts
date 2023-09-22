import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegister } from './userregister.interface';
@Injectable({
  providedIn: 'root'
})
export class UserregisterService {
  private apiUrl1 = 'http://localhost:8080/add/user';
  constructor(private http: HttpClient) { }
  login(user: UserRegister): Observable<UserRegister> {
    return this.http.post<UserRegister>(this.apiUrl1, user);
  }
}
