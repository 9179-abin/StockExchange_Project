import { Component, OnInit } from '@angular/core';
import { UploadServiceService } from 'src/app/services/upload-service.service';
import bsCustomFileInput from "bs-custom-file-input";
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  file:File;
  constructor(private services:UploadServiceService,private router:Router) { }
  navbarOpen = false;
  onFileChange(e){
    this.file = e.target.files[0];
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  uploadData(){
    const uploadSheet = new FormData();
    uploadSheet.append("stockSheet",this.file,this.file.name);
    this.services.uploadStockSheet(uploadSheet).subscribe(data =>{
      console.log("Uploaded");
      console.log(data);
      this.router.navigate(['/adminservices']);
    })
  }
  ngOnInit() {
    bsCustomFileInput.init();
  }

}
