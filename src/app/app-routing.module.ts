import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProductcatgoryComponent } from './productcatgory/productcatgory.component';

const routes: Routes = [
  {path:"",component:UserLoginComponent},
  {path:"admin",component:AdminLoginComponent},
  {path:"register",component:UserRegisterComponent},
  {path:"adash",component:AdmindashboardComponent},
  {path:"udash",component:UserdashboardComponent},
  {path:"prod",component:ProductComponent},
  {path:"users",component:UsersComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"prodcat",component:ProductcatgoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
