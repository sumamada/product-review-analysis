import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Adminlogin } from '../adminlogin.interface';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username:string="";
  password:string="";

  constructor(private http:HttpClient,private router:Router){}

  isCredentialsValid: boolean = true; // Track whether credentials are valid

login(){
  

let bodyData={
      
      "username":this.username,
      "password":this.password
      
    };
    this.http.post("http://localhost:8080/api/v1/admin/login",bodyData,{responseType:'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Admin login success");
      
      this.router.navigate(['/adash']);
    });

}
}
 

   

 

