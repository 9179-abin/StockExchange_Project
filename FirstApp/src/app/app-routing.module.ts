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
import { AddIpoComponent } from './admin/add-ipo/add-ipo.component';
import { ViewIPOComponent } from './admin/view-ipo/view-ipo.component';
import { StockExchangeService } from './services/stock-exchange.service';
import { AuthGuard } from './auth.guard';
import { UpdateIPOComponent } from './admin/update-ipo/update-ipo.component';
import { UserlandingComponent } from './user/userlanding/userlanding.component';


const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'home', component:HomeComponent },
  {path:'register', component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'upload' , component:UploadComponent},
  {path:'view', component:ViewComponent, canActivate: [AuthGuard]},
  {path:'view/update-user', component:UpdateUserComponent},
  {path:'adminservices', component:AdminServicesComponent},
  {path:'login/adminservices', component:AdminServicesComponent},
  {path:'adminservices/upload', component:UploadComponent},
  {path:'adminservices/view', component:ViewComponent},
  {path:'adminservices/addcompany', component:AddCompanyComponent},
  {path:'adminservices/viewCompany', component:ViewCompanyComponent},
  {path:'adminservices/viewIpo', component:ViewIPOComponent},
  {path:'adminservices/addIpo', component:AddIpoComponent},
  {path:'login/adminservices/view', component:ViewComponent},
  {path:'update-user',component:UpdateUserComponent},
  {path:'addcompany', component:AddCompanyComponent},
  {path:'viewCompany', component:ViewCompanyComponent},
  {path:'viewCompany/updateCompany', component:UpdateCompanyComponent},
  {path:'updateCompany',component:UpdateCompanyComponent},
  {path:'addIpo',component:AddIpoComponent},
  {path:'viewIpo' , component:ViewIPOComponent},
  {path:'viewIpo/updateIPO' , component:UpdateIPOComponent},
  {path:'stockExchange', component:StockExchangeService},
  {path:'updateIPO',component:UpdateIPOComponent},
  {path:'userLanding',component:UserlandingComponent},
  {path:'userLanding/home',component:HomeComponent},
  {path:'adminservices/home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
