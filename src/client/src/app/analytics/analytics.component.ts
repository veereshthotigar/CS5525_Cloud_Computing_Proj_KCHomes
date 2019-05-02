import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
  public by: string;
  public text : string;
  searchby = ['zip_code','neighborhood'];
  //searchby = ['Demolition List','LeadSafe','Property Violations'];
  url:string;
  result:Observable<any>;
  constructor(private http: HttpClient) { 
      
  }

  onSearch(){
    this.url = 'http://52.15.61.252:80/search?searchby='+this.by+'&searchtext='+this.text;
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
