import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Chart } from 'angular-highcharts';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-migration',
  templateUrl: './migration.component.html',
  styleUrls: ['./migration.component.css']
})
export class MigrationComponent implements OnInit {
  public chart2:Chart;
  public chart3:Chart;
  
  constructor() {
    this.chart2= new Chart( {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Migration Flows'
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
              '<td style="padding:0"><b>{point.y:f} </b></td></tr>',
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
          name: 'Northeast',
          data: [5725386,	5592274,	5532954,	5511594,	5510012,	5476901,	5476082,	5481865]

      }, {
          name: 'Midwest',
          data: [8948562,	8785604,	8737581,	8726997,	8749136,	8762879,	8802785,	8749362]

      }, {
          name: 'South',
          data: [16380798,	16120853,	15989622,	15986631,	16059843,	16072455,	16083894,	16052392]

      }, {
          name: 'West',
          data: [10702120,	10691572,	10773034,	10857879,	10786919,	10581355,	10381759,	10193448]

      }]
      
    });
    this.chart3= new Chart( {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Movers from abroad'
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
        name: 'Northeast',
        data: [352458,	357322,	363457,	362387,	374976,	385152,	394990,	400150]

    }, {
        name: 'Midwest',
        data: [272600,	274346,	278094,	279169,	284839,	293729,	300986,	303599]

    }, {
        name: 'South',
        data: [686729,	676385,	677578,	678692,	708143,	735978,	766921,	801559]

    }, {
        name: 'West',
        data: [531309,	515087,	500299,	494437,	511888,	530350,	549835,	568789]

    }]
        
    });
  }

  ngOnInit() {
  }

}
