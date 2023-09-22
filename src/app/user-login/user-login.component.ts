import { Component, OnInit } from '@angular/core';

import { NgModel } from '@angular/forms';

import { Router } from '@angular/router';

import { UserloginService } from '../userlogin.service';

import { UserResponse } from '../user.interface';

import { RouterModule } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({

  selector: 'app-user-login',

  templateUrl: './user-login.component.html',

  styleUrls: ['./user-login.component.css']

})

export class UserLoginComponent implements OnInit{

  username:string="";

  password:string="";

 

 constructor(private http:HttpClient,private router: Router){}

 

ngOnInit(){

 

}

login(){

 

  let bodyData={

     

    "username":this.username,

    "password":this.password

   

  };

  this.http.post("http://localhost:8080/api/v1/user/login",bodyData,{responseType:'json'}).subscribe((resultData:any)=>

  {

 

    console.log(resultData)

    if(resultData.userId!=0){

       

       console.log(resultData.userId);

       alert("User login success");

       this.router.navigate(['/udash']);

    }

    else{

      alert("User login failed");

    }

  });

 

}

}