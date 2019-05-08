import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Chart } from 'angular-highcharts';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {
  public chart1:Chart;
  constructor() {
    this.chart1= new Chart( {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Housing Units'
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
          name: 'Total Housing Units',
          data: [130038080, 131034946, 131642457, 132057804, 132741033, 133351840, 134054899, 131642457]
  
      }, {
          name: 'Occupied',
          data: [114235996, 114761359, 115226802, 115610216, 116211092, 116926305, 117716237, 118825921]
  
      }, {
          name: 'Owner Occupied',
          data: [76089650, 75896759, 75484661, 75075700, 74787460, 74712091, 74881068, 75833135]
  
      }, {
          name: 'Rental Occupied',
          data: [38146346, 38864600, 39742141, 40534516, 41423632, 42214214, 42835169, 42992786]
  
      }]
      
    });
  }

  ngOnInit() {
  }

}
