import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Chart } from 'angular-highcharts';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  public by: string;
  public text : string;
  url:string;
  result:Observable<any>;
  constructor(private http: HttpClient) { }
  onSearch(){
    this.by = 'address';
    this.url = environment.originApiUrl+'/search?searchby='+this.by+'&searchtext='+this.text;
    this.http.get(this.url)
      .subscribe(
        (res:any)=>{
          this.result = res.data;
          console.log(this.result);
        }
      )
  }
  ngOnInit() {
  }
}
