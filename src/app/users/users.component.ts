import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Userd } from '../userd.interface';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private us:UsersService){}
  users:any;
  ngOnInit():void{
    this.us.fetchUsers().subscribe(
   
      (data)=>{
  
        this.users = data;
      },
      (error)=>{
        console.log("error")
      }
  
    )
      
  
  
    }
}
