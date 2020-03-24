import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphPageRoutingModule } from './graph-routing.module';

import { GraphPage } from './graph.page';
import { ChartsModule } from 'ng2-charts';

import { BLE } from '@ionic-native/ble/ngx';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: GraphPage
  }
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphPageRoutingModule,
    ChartsModule,
    RouterModule.forChild(routes)
  ],
  providers: [BLE, LocalNotifications],
  declarations: [GraphPage]
})
export class GraphPageModule {}
