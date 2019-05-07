import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Chart } from 'angular-highcharts';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})

export class AnalyticsComponent implements OnInit {
  public by: string;
  public text : string;
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
  searchby = ['zip_code','neighborhood'];
  //searchby = ['Demolition List','LeadSafe','Property Violations'];
  url:string;
  result:Observable<any>;
  public chart1:Chart;
  public chart2:Chart;
  public chart3:Chart;
  public chart4:Chart;
  constructor(private http: HttpClient) { 
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
        this.chart4= new Chart( {
            chart: {
                type: 'column'
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

  onSearch(){
    this.url = environment.originApiUrl+'/search?searchby='+this.by+'&searchtext='+this.text;
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
