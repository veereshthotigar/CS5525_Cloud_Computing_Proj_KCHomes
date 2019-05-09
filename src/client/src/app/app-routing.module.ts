import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AnalyticsComponent } from './analytics/analytics.component';
import { HousingComponent } from './housing/housing.component';
import { MigrationComponent } from './migration/migration.component';
import { RentalComponent } from './rental/rental.component';
import { KansasComponent } from './kansas/kansas.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { RentComponent } from './rent/rent.component';

import { AddressComponent } from './address/address.component';
import { ZipcodeComponent } from './zipcode/zipcode.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'analytics', component: AnalyticsComponent, children: [
    { path: 'kansas', component: KansasComponent ,children: [
      { path: 'one', component: OneComponent },
      { path: 'two', component: TwoComponent },
      { path: 'three', component: ThreeComponent }
    ]},
    { path: 'migration', component: MigrationComponent },
    { path: 'rental', component: RentalComponent },
    { path: 'housing', component: HousingComponent }
  ] },
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent },
  { path: 'rent', component: RentComponent ,children: [
    { path: 'address', component: AddressComponent },
    { path: 'zipcode', component: ZipcodeComponent }
  ]},
  { path: '',   redirectTo: '/analytics', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: []
})
export class AppRoutingModule { }
