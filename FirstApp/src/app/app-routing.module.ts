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
// import { AuthGuard } from './auth.guard';
import { UpdateIPOComponent } from './admin/update-ipo/update-ipo.component';
import { UserlandingComponent } from './user/userlanding/userlanding.component';
import { AddStocksComponent } from './admin/add-stocks/add-stocks.component';
import { ViewStocksComponent } from './admin/view-stocks/view-stocks.component';
import { ComparesectorComponent } from './user/comparesector/comparesector.component';
import { ComparechartsComponent } from './user/comparecharts/comparecharts.component';
import { UserIpoViewComponent } from './user/user-ipo-view/user-ipo-view.component';
import { UpdateStockComponent } from './admin/update-stock/update-stock.component';
import { StockPrices } from './models/stockPrices';
import { AddStockPricesComponent } from './admin/add-stock-prices/add-stock-prices.component';
import { ViewStockPricesComponent } from './admin/view-stock-prices/view-stock-prices.component';
import { UpdateStockPriceComponent } from './admin/update-stock-price/update-stock-price.component';
import { ActivateComponent } from './admin/activate/activate.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'upload' , component:UploadComponent},
  {path:'activate' , component:ActivateComponent},
  {path:'view', component:ViewComponent},
  {path:'viewStockPrice', component:ViewStockPricesComponent},
  {path:'updateStockPrice', component:UpdateStockPriceComponent},
  {path:'view/update-user', component:UpdateUserComponent},
  {path:'adminservices', component:AdminServicesComponent},
  {path:'login/adminservices', component:AdminServicesComponent},
  {path:'adminservices/upload', component:UploadComponent},
  {path:'adminservices/view', component:ViewComponent},
  {path:'adminservices/addcompany', component:AddCompanyComponent},
  {path:'adminservices/viewCompany', component:ViewCompanyComponent},
  {path:'adminservices/viewIpo', component:ViewIPOComponent},
  {path:'adminservices/addIpo', component:AddIpoComponent},
  {path:'adminservices/add-stocks', component:AddStocksComponent},
  {path:'adminservices/viewstocks', component:ViewStocksComponent},
  {path:'login/adminservices/views', component:ViewComponent},
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
  {path:'addStockPrices',component:AddStockPricesComponent},
  {path:'viewCompany/addStockPrices',component:AddStockPricesComponent},
  {path:'userLanding',component:UserlandingComponent},
  {path:'userLanding/home',component:HomeComponent},
  {path:'adminservices/home',component:HomeComponent},
  {path:"add-stocks",component:AddStocksComponent},
  {path:"viewstocks",component:ViewStocksComponent},
  {path:"updateStock", component:UpdateStockComponent},
  {path:"comparesector",component:ComparesectorComponent},
  {path:"comparecharts",component:ComparechartsComponent},
  {path:"useripo",component:UserIpoViewComponent},
  {path:"userLanding/useripo",component:UserIpoViewComponent},
  {path:"userLanding/comparecharts",component:ComparechartsComponent},
  {path:"userLanding/comparesector",component:ComparesectorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
