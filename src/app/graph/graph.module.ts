import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphPageRoutingModule } from './graph-routing.module';

import { GraphPage } from './graph.page';
import { ChartsModule } from 'ng2-charts';

import { BLE } from '@ionic-native/ble/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphPageRoutingModule,
    ChartsModule
  ],
  providers: [
     BLE
    
  ],
  declarations: [GraphPage]
})
export class GraphPageModule {}
