import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http:HttpClient) { }

  url="http://localhost:8080/api/v1/users";
  fetchUsers(){
  
    return this.http.get(this.url);
   
   }
}
