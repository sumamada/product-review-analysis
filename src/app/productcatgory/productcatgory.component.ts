import { Component } from '@angular/core';
import { ProductService } from '../product.service';

import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productcatgory',
  templateUrl: './productcatgory.component.html',
  styleUrls: ['./productcatgory.component.css']
})
export class ProductcatgoryComponent {
  productName:string='';

  productPrice:number=0;

  productSeller:string='';

  productCategory:String='';

  productId:number=0;

  constructor(private ps:ProductService,private http:HttpClient){}

  products:any;

  filteredCategory:string='';

  ngOnInit():void{

   

   

    this.getproducts();

 

   }

 getproducts(){

 

   this.ps.fetchProducts().subscribe(

   

     (data)=>{

 

       this.products = data;

     },

     (error)=>{

       console.log("error")

     }

 

   )

 }

}
