import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Google Maps
import { GoogleChartsModule } from 'angular-google-charts';

//High charts
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as highmaps from 'highcharts/modules/map.src';

import { environment } from '../environments/environment';
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
import { HousingComponent } from './housing/housing.component';
import { MigrationComponent } from './migration/migration.component';
import { RentalComponent } from './rental/rental.component';
import { KansasComponent } from './kansas/kansas.component';

const appRoutes: Routes = [
  { path: 'analytics', component: AnalyticsComponent, children: [
    { path: 'kansas', component: KansasComponent },
    { path: 'migration', component: MigrationComponent },
    { path: 'rental', component: RentalComponent },
    { path: 'housing', component: HousingComponent }]
  },
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
    PageNotFoundComponent,
    HousingComponent,
    MigrationComponent,
    RentalComponent,
    KansasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule,
    GoogleChartsModule.forRoot(environment.googleAPIkey),//googleAPIkey
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    CommonModuleBootstrap,
    AppRoutingModule
    
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] },
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ highmaps ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
