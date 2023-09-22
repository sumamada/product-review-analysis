import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminService } from './admin.service';
import { UserloginService } from './userlogin.service';
import { UserregisterService } from './userregister.service';
import { ProductService } from './product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { ProductcatgoryComponent } from './productcatgory/productcatgory.component';
import { ProductfilterPipe } from './productfilter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UsersComponent,
    FeedbackComponent,
    UserdashboardComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserRegisterComponent,
    AdmindashboardComponent,
    ProductcatgoryComponent,
    
    ProductfilterPipe

    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [AdminService,UserloginService,UserregisterService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
