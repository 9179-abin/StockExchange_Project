import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './common/register/register.component';
import {  FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './common/login/login.component';
import { UploadComponent } from './admin/upload/upload.component';
import { ViewComponent } from './admin/view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminServicesComponent } from './admin/admin-services/admin-services.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { ViewCompanyComponent } from './admin/view-company/view-company.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { AddIpoComponent } from './admin/add-ipo/add-ipo.component';
import { ViewIPOComponent } from './admin/view-ipo/view-ipo.component';
import { UserlandingComponent } from './user/userlanding/userlanding.component';
import { UpdateIPOComponent } from './admin/update-ipo/update-ipo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    UploadComponent,
    ViewComponent,
    AdminServicesComponent,
    UpdateUserComponent,
    AddCompanyComponent,
    ViewCompanyComponent,
    UpdateCompanyComponent,
    AddIpoComponent,
    ViewIPOComponent,
    UserlandingComponent,
    UpdateIPOComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
