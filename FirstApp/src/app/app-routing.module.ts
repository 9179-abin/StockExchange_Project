import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './common/register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './common/login/login.component';
import { UploadComponent } from './admin/upload/upload.component';
import { ViewComponent } from './admin/view/view.component';
import { AdminServicesComponent } from './admin/admin-services/admin-services.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { ViewCompanyComponent } from './admin/view-company/view-company.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
  {path:'register', component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'upload' , component:UploadComponent},
  {path:'view', component:ViewComponent},
  {path:'adminservices', component:AdminServicesComponent},
  {path:'adminservices/upload', component:UploadComponent},
  {path:'adminservices/view', component:ViewComponent},
  {path:'update-user',component:UpdateUserComponent},
  {path:'update-user/adminservices',component:AdminServicesComponent},
  {path:'addcompany', component:AddCompanyComponent},
  {path:'viewCompany', component:ViewCompanyComponent},
  {path:'updateCompany',component:UpdateCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
