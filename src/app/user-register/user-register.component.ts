import { Component } from '@angular/core';
import { UserRegister } from '../userregister.interface';
import { UserregisterService } from '../userregister.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  
  name:string="";
  username:string="";
  password:string="";
  address:string="";
  mobileNo:string="";
  

  constructor(private http:HttpClient,private router:Router){


  }
  register(){
    let bodyData={
      "name":this.name,
      "username":this.username,
      "password":this.password,
      "address":this.address,
      "mobileNo":this.mobileNo
    };
    this.http.post("http://localhost:8080/api/v1/add/user",bodyData).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("user registered succesfully");
      
      this.router.navigate(['/udash']);
    });
  }

}