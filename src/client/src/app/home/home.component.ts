import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public by: string;
  public text : string;
  searchby = ['zip_code','neighborhood'];
  url:string;
  result:Observable<any>;
  constructor(private http: HttpClient) { }

  onSearch(){
    this.url = 'http://127.0.0.1:3000/search?searchby='+this.by+'&searchtext='+this.text;
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
