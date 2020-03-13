import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
declare var $:any;

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  msg:string;
  constructor(@Inject(UserService) private service) { }
  ngOnInit() {
    this.checkActivation()
  }
  checkActivation(){
    var urlad = document.URL
    var strarr = urlad.split("?")
    var str = strarr[1]
    str = str.substring(0, str.length-1);
    this.service.serviceActivation({email:str}).subscribe(dt => {
      if(dt.result==1){
        this.msg="Activation successfull..Please Login Again!"
        $('#myMessage').modal('show');
      }
      else{
        this.msg="already activated";
        $('#myMessage').modal('show');
      }
    });
  }
}

