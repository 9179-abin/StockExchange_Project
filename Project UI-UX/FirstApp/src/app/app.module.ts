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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminServicesComponent } from './admin/admin-services/admin-services.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { ViewCompanyComponent } from './admin/view-company/view-company.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { AddIpoComponent } from './admin/add-ipo/add-ipo.component';
import { ViewIPOComponent } from './admin/view-ipo/view-ipo.component';
import { UserlandingComponent } from './user/userlanding/userlanding.component';
import { UpdateIPOComponent } from './admin/update-ipo/update-ipo.component';
import { AddStocksComponent } from './admin/add-stocks/add-stocks.component';
import { ViewStocksComponent } from './admin/view-stocks/view-stocks.component';
import { UpdateStockComponent } from './admin/update-stock/update-stock.component';
import { ComparechartsComponent } from './user/comparecharts/comparecharts.component';
import { ComparesectorComponent } from './user/comparesector/comparesector.component';
import { UserIpoViewComponent } from './user/user-ipo-view/user-ipo-view.component';
import { AddStockPricesComponent } from './admin/add-stock-prices/add-stock-prices.component';
import { ViewStockPricesComponent } from './admin/view-stock-prices/view-stock-prices.component';
import { UpdateStockPriceComponent } from './admin/update-stock-price/update-stock-price.component';
import { ActivateComponent } from './admin/activate/activate.component';
// import { UserinfoComponent } from './user/userinfo/userinfo.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { ShowchartComponent } from './user/showchart/showchart.component';
import { HighchartsChartComponent } from "../../node_modules/highcharts-angular";
import { NavbarcommonComponent } from './navbarcommon/navbarcommon.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { UsersidenavComponent } from './user/usersidenav/usersidenav.component';
import { AdminsidenavComponent } from './admin/adminsidenav/adminsidenav.component';
import { HttpInterseptorService } from './services/http-interseptor.service';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

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
    UpdateIPOComponent,
    AddStocksComponent,
    ViewStocksComponent,
    UpdateStockComponent,
    ComparechartsComponent,
    ComparesectorComponent,
    UserIpoViewComponent,
    AddStockPricesComponent,
    ViewStockPricesComponent,
    UpdateStockPriceComponent,
    ActivateComponent,
    UserInfoComponent,
    ShowchartComponent,
    HighchartsChartComponent,
    NavbarcommonComponent,
    NavbaruserComponent,
    NavbaradminComponent,
    UsersidenavComponent,
    AdminsidenavComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // MatAutocompleteModule,
    // MatFormFieldModule,
    // MatInputModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:HttpInterseptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
