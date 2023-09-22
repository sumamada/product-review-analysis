import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8080/api/v1/products";

  url1="http://localhost:8080/api/v1/product/delete";

  fetchProducts(){
  
   return this.http.get(this.url);
  
  }


deleteProduct(productId: number){

return this.http.delete(this.url1+"/"+productId);
    
}
postProduct(){

  

}
putProduct(){

}

}
