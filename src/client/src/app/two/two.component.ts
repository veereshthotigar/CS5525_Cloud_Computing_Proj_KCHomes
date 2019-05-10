import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  public chart2:Chart;
  constructor() {
    this.chart2= new Chart( {
      chart: {
          type: 'line'
      },
      title: {
          text: ' Housing Units'
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
          name: 'Total housing units',
          data: [224317, 224622, 224765, 225145, 225464, 227002, 227768, 229508]
  
      }, {
          name: 'Occupied housing units',
          data: [192695, 192271, 192048, 192648, 192799, 195033, 196416, 198935]
  
      }, {
          name: 'Owner-occupied',
          data: [112208, 110230, 109139, 108507, 106906, 106130, 105565, 107352]
  
      },  {
        name: 'Renter-occupied',
        data: [80487, 82041, 82909, 84141, 85893, 88903, 90851, 91583]

    }
    ]
      
    });
   }

  ngOnInit() {
  }

}
