import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CompanyService } from 'src/app/services/company.service';
import { StockPricesService } from 'src/app/services/stock-prices.service';
import { Company } from '../../models/company';
import { StockPrices } from '../../models/stockPrices';
import {CompareCompany } from '../../models/compare';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showchart',
  templateUrl: './showchart.component.html',
  styleUrls: ['./showchart.component.css']
})


export class ShowchartComponent implements OnInit {
   
   c1:number;
   c2:number;
   e1:string;
   e2:string;
   company:Company[];
   stprice:StockPrices[];
   d1:number[]=[];
   d2:number[]=[];
   d3:string[]=[];
   i:number;

   title = "app";
   chart;
   updateFlag = false;
   Highcharts = Highcharts;
   chartConstructor = "chart";
   chartCallback;
   chartOptions = {
     chart: {
       type: "column"
    },
     series: [
       {
         name: '',
         data: []
       },
       {
         name: '',
         data: []
       }
     ],
     exporting: {
       enabled: true
     },
     xAxis: {
      categories:[]
  },
     yAxis: {
       allowDecimals: true,
       title: {
         text: "Price"
       }
     }
   };
   
   
  constructor(private companyService:CompanyService, private stockPriceService:StockPricesService) {
  

   }
    chartOne = Highcharts;
    chartOneOptions: any;
    
  ngOnInit() {
   this.chartCallback = chart => {

      this.chart = chart;
    };
   this.c1=+localStorage.getItem("c1");
   this.c2=+localStorage.getItem("c2");
   this.companyService.getAllCompanies().subscribe(data =>{
      this.company=data;
      for(this.i=0;this.i<this.company.length;this.i++){
         if(data[this.i].id==this.c1){
            this.e1=data[this.i].companyName;
         }
         if(data[this.i].id==this.c2){
            this.e2=data[this.i].companyName;
         }
      }
   });
   
   this.stockPriceService.getAllStockPrices().subscribe(data =>{
      this.stprice=data;
      for(this.i=0;this.i<this.stprice.length;this.i++){
         if(data[this.i].companyCode==this.c1){
            this.d1.push(data[this.i].stockPrice);
            this.d3.push(data[this.i].date.toString());
         }
         if(data[this.i].companyCode==this.c2){
            this.d2.push(data[this.i].stockPrice);
         }
      }
      this.updateChart();
   });
   
  }
  updateChart() {
   const self = this,
     chart = this.chart;
   chart.showLoading();
   setTimeout(() => {
     chart.hideLoading();
     self.chartOptions
     .series = [
       {
         name: this.e1,
         data: this.d1
       },
       {
         name:this.e2,
         data: this.d2
       }
     ];
     
     self.chartOptions.xAxis = {
      categories:this.d3
     }
     

     self.updateFlag = true;
   }, 2000);
 }

  
}
