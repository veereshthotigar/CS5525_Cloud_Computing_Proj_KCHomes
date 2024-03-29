import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Chart } from 'angular-highcharts';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {
  public by: string;
  public text : string;
  chartType = 'geochart';
  chartData = [['Lat', 'Long', 'Name'],
  [37.4232, -122.0853, 'Work'],
  [37.4289, -122.1697, 'University'],
  [37.6153, -122.3900, 'Airport'],
  [37.4422, -122.1731, 'Shopping']];
  url:string;
  result:Observable<any>;
  constructor(private http: HttpClient) { }
  onSearch(){
    this.by = 'zip_code';
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
