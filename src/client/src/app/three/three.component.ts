import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  public chart3:Chart;
  constructor() { 
    this.chart3= new Chart( {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Occupied Household Income'
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
        name: 'Less than $5000',
        data: [4.6, 4.8, 4.7, 4.9, 5.0, 4.7, 4.5, 4.2]

    }, {
        name: '$5000 to $9999',
        data: [5.6, 5.3, 5.4, 5.2, 5.0, 4.9, 4.6, 4.1]

    }, {
        name: '$10000 to $14999',
        data: [6.3, 6.1, 5.9, 6.0, 6.0, 6.1, 5.9, 5.6]

    }, 
    {
      name: '$14999 to $19999',
      data: [5.6, 5.5, 5.8, 5.8, 6.0, 5.9, 6.0, 5.6]

  },  {
      name: '$20000 to $24999',
      data: [6.3, 5.8, 5.7, 5.8, 5.8, 6.0, 5.7, 5.6]

  },
  {
    name: '$25000 to $34999',
    data: [12.5, 12.5, 12.1, 11.9, 11.2, 11.1, 10.9, 10.6]

},{
    name: '$35000 to $49999',
    data: [14.9, 14.6, 14.7, 14.4, 14.6, 14.4, 14.2, 14.1]

},{
  name: '$50000 to $74999',
  data: [17.7, 17.7, 17.6, 17.6, 17.4, 17.7, 18.3, 18.4]

},{
  name: '$75000 to $99999',
  data: [10.6, 10.8, 10.6, 11.2, 11.2, 11.1, 11.5, 11.7]

},
{
  name: '$100000 to $149999',
  data: [10.6, 10.9, 11.1, 10.8, 10.9, 10.9, 11.1, 11.8]

},
{
  name: '$150000 or more ',
  data: [5.3, 6.1, 6.4, 6.5, 6.8, 7.1, 7.4, 8.2]

},

  ]
      
    });
  }

  ngOnInit() {
  }

}
