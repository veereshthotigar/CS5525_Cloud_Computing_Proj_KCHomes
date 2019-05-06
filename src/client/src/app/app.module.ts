import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Google Maps
import { AgmCoreModule } from '@agm/core';

//High charts
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as highmaps from 'highcharts/modules/map.src';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { CommonModuleBootstrap } from './common/common.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { RentComponent } from './rent/rent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent },
  { path: 'rent', component: RentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AnalyticsComponent,
    BuyComponent,
    SellComponent,
    RentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    CommonModuleBootstrap,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-KVaZb4AY8piVKrSyIJTmZcHIQHMEWNI'
    })
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] },
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ highmaps ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
