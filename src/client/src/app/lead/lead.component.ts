import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  public by: string;
  public text : string;
  url:string;
  result:Observable<any>;
  constructor(private http: HttpClient) { }
  onSearch(){
    this.by = 'location_1_address';
    this.url = environment.originApiUrl+'/lead_safe?searchby='+this.by+'&searchtext='+this.text;
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
