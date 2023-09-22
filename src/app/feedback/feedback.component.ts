import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  feedbackId:number=0;
  feedback:string="";
  rating:number=0;
  userId:number=0;
  productId:number=0;
  feedbacks:any;
  isResultLoaded=false;
  constructor(private http:HttpClient){}
  ngOnInit():void{
    
    this.getfeedbacks();
    
 
   }
getfeedbacks(){
  this.http.get("http://localhost:8080/api/v1/feedbacks")
  
  .subscribe((resultData: any)=>
  {
      this.isResultLoaded = true;
      console.log(resultData);
      this.feedbacks = resultData;
  });

}
  deleteFeedback(data:any){
    this.http.delete("http://localhost:8080/api/v1/feedback/delete"+ "/"+ data.feedbackId,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Feedback Deletedddd")
        this.getfeedbacks();
       
  
  });
  }
}
