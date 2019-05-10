import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Chart } from 'angular-highcharts';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  
  public chart4:Chart;
  constructor() { 
    this.chart4= new Chart( {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Rental Housing Units'
      },
      subtitle: {
          text: 'American Community Survey'
      },
      xAxis: {
          categories: [
          '2010',
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017'
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Count'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [{
          name: '$800 to $899',
          data: [3108561,	3194531,	3402473,	3505845,	3552977,	3661493,	3695613,	3736831]

      }, {
          name: '$900 to $999',
          data: [2355811,	2487276,	2537503,	2724617,	2690797,	2741829,	2948263,	290450]

      }, {
          name: '$1,000 to $1,249',
          data: [3756397,	3941968,	4288557,	4607400,	4840078,	5035724,	5175117,	5514912]

      }, {
          name: '$1,250 to $1,499',
          data: [2069572,	2412195,	2681074,	2613415,	2809569,	2921986,	3167536,	3327255]

      }, {
      name: '$1,500 to $1,999',
      data: [1898263,	2140908,	2254415,	2501880,	2685608,	2835170,	3120093,	3473884]

      }, {
          name: '$2,000 or more',
          data: [1078925,	1248456,	1423577,	1562604,	1737631,	1893258,	2128707,	2432136]

      }]
      
     });
  }

  ngOnInit() {
  }

}
