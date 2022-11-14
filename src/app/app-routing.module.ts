import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ListeEmployeeComponent } from './liste-employee/liste-employee.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'home', component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'customer',component:CustomerComponent},
  {path:'add',component:AddCustomerComponent},
  {path:'liste',component:ListeEmployeeComponent},
  {path:'addemployee',component:AddEmployeeComponent}
  


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
