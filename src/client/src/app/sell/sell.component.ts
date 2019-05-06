import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HereService } from "../here.service";


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  usstates = environment.us_states;
  public query: string;
  public position: string;
  public inputAddress:string;
  public inputCity:string;
  public inputState:string;
  public inputZip:string;
  public locations: Array<any>;
  constructor(private here: HereService) {
    this.query = "5425 Harrison St, Kansas city, MO 64110";
    this.position = "39.02808,-94.57458";
   }
  
  ngOnInit() {
  }
  public getAddress() {
      this.query = this.inputAddress+' '+this.inputCity+' '+this.inputState+' '+this.inputZip;
      console.log(this.query);
      if(this.query != "") {
          this.here.getAddress(this.query).then(result => {
              this.locations = <Array<any>>result;
          }, error => {
              console.error(error);
          });
      }
  }
  public getAddressFromLatLng() {
      if(this.position != "") {
          this.here.getAddressFromLatLng(this.position).then(result => {
              this.locations = <Array<any>>result;
          }, error => {
              console.error(error);
          });
      }
  }
}
