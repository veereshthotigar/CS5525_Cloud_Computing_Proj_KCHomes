import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Chart } from 'angular-highcharts';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-kansas',
  templateUrl: './kansas.component.html',
  styleUrls: ['./kansas.component.css']
})
export class KansasComponent implements OnInit {
  myData = [
    ['City',   'Population'],
    ['Rome',      2761477  ],
    ['Milan',     1324110],
    ['Naples',    959574],
    ['Turin',     907563],
    ['Palermo',   655875],
    ['Genoa',     607906],
    ['Bologna',   380181],
    ['Florence',  371282],
    ['Fiumicino', 67370],
    ['Anzio',     52192],
    ['Ciampino',  38262]
];

  options = [{
    region: 'IT',
    displayMode: 'markers',
    colorAxis: {colors: ['green', 'blue']}
  }];
  constructor() { }

  ngOnInit() {
  }

}
