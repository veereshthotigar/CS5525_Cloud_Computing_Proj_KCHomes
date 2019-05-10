import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  public chart1:Chart;
  constructor() { 
    this.chart1= new Chart( {
      chart: {
          type: 'line'
      },
      title: {
          text: ' Occupied Housing Units without a Mortigage'
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
              text: 'Percentage'
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
          name: 'Less than $50,000',
          data: [20.40, 21.0, 21.9, 23.1, 23.4, 24.3, 23.9, 23.4]
  
      }, {
          name: '$50000 to $99999',
          data: [28.0, 27.5, 27.6, 27.0, 27.1, 26.8, 26.8, 26.3]
  
      }, {
          name: '$100000 to $199999',
          data: [34.4, 33.7, 31.9, 31.5, 30.6, 30.6, 29.4, 29.8 ]
  
      },  {
        name: '$200000 to $299999',
        data: [10.4, 10.5, 11.2, 11.6, 11.8, 11.9, 12.8, 11.8]

    },{
      name: '$300,000 to $499,999',
      data: [4.7, 4.7, 4.7, 4.4, 4.7, 4.2, 4.4, 5.6]

  },{
    name: '$500,000 or more',
    data: [2.1, 2.6, 2.6, 2.4, 2.3, 2.2, 2.6, 3]

}
    ]
      
    });
  }

  ngOnInit() {
  }

}
