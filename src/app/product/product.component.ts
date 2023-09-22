import { Component } from '@angular/core';
import { ProductService } from '../product.service';
// import { product } from '../product.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
export interface product{

  productId:number;
 productName:string;
productPrice:number;
productSeller:string
productCategory:string

}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productName:string='';
  productPrice:number=0;
  productSeller:string='';
  productCategory:String='';
  productId:number=0;
  constructor(private ps:ProductService,private http:HttpClient){}
  products:any;
  
  formHeader="Add Product";

  showForm=false;

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


openForm1(data: { productName: string; productPrice: number; productSeller: string; productCategory: String; }){

  this.showForm=true;
  this.formHeader="Edit Product";
  this.productId=this.productId;
  if(data){
     this.productName=data.productName;
     this.productPrice=data.productPrice;
     this.productSeller=data.productSeller;
      this.productCategory=data.productCategory;
      this.productId=this.productId
  }
}
openForm(){
  this.showForm=true;
 this.formHeader="Add Product";
  this.productName="";
  this.productPrice=0;
  this.productSeller="";
  this.productCategory="";

}
closeForm(){
  this.showForm=false;
  this.clearForm()
}
clearForm(){
  this.productName="";
  this.productPrice=0;
  this.productSeller="";
  this.productCategory="";
   
}
saveProduct(){
  alert(this.productId)
  
  if(this.productId == 0)
    {
        this.saveProd();
    }
      else
      {
       this.updateProduct();
      }      
}
saveProd(){

  let bodyData={
    "productName":this.productName,
    "productPrice":this.productPrice,
    "productSeller":this.productSeller,
    "productCategory":this.productCategory,
    
  };
  this.http.post("http://localhost:8080/api/v1/add/product",bodyData).subscribe((resultData:any)=>
  {
    console.log(resultData);
    alert("product added succesfully");
    this.getproducts();
    this.productName="";
    this.productPrice=0;
    this.productSeller="";
    this.productCategory="";
    this.closeForm();
  });

}
deleteProduct(data:any){
  
  this.http.delete("http://localhost:8080/api/v1/product/delete"+ "/"+ data.productId,{responseType: 'text'}).subscribe((resultData: any)=>
  {
      console.log(resultData);
      alert("product Deletedddd");
      this.getproducts();
      this.productName="";
    this.productPrice=0;
    this.productSeller="";
    this.productCategory="";

});

 }

 updateProduct()
  {
    let bodyData = {
      "productId":this.productId,
      "productName":this.productName,
      "productPrice":this.productPrice,
      "productSeller":this.productSeller,
      "productCategory":this.productCategory,
    };
    
    this.http.put("http://localhost:8080/api/v1/product/update"+ "/"+bodyData.productId,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Updated Successfully")
        this.getproducts();
        this.productName="";
        this.productPrice=0;
        this.productSeller="";
        this.productCategory=""; 
    });
  }

}
