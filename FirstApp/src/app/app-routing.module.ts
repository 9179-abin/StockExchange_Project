import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './common/register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './common/login/login.component';
import { UploadComponent } from './admin/upload/upload.component';
import { ViewComponent } from './admin/view/view.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
  {path:'register', component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'upload' , component:UploadComponent},
  {path:'view', component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
