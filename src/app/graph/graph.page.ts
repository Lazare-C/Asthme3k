import { Component, OnInit } from '@angular/core';


import { LoadingController } from '@ionic/angular';

import { ChartsModule } from 'ng2-charts'; // <- HERE
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
import { HTTP } from '@ionic-native/http/ngx';

import { BLE } from '@ionic-native/ble/ngx';



import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})







export class GraphPage implements OnInit {
  //Déclarations des variables
  score: Array<number> = [0];
  public data: any;
  

  slide: any;

  public last_data(slide){

    return this.slide.slice(-1)[0]
  }


  
   ngOnInit() {} 

  devices: any[] = [];
  public result: String = "Wsh bro";
  public a3km: String = "(-__-)";
  public progres: number = 5;
  
  constructor(public ble: BLE, private localNotifications: LocalNotifications) {}

  doRefresh(event) {
    console.log('Begin async operation');
    this.updateData();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  
  scan() {
    this.ble.startScan([]).subscribe(device => {
      this.result = JSON.stringify(device, null, 2);
    });
    setTimeout(() => {
      this.ble.stopScan();
    }, 5000); 
}
 

bleconnect(ble_id: string){
  this.ble.autoConnect(ble_id, this.onConnected.bind(this), this.onDisconnected.bind(this));
  }

  bledisconect(ble_id: string){
    this.ble.disconnect(ble_id).then(() => {
      console.log('Disconnected');
    });

  }

  onConnected(peripheral) {
    this.a3km = `Connected to ${peripheral.id}`;
    
    this.blenotify(peripheral.id)
  }

  onDisconnected(peripheral) {
    this.a3km = `Disconnected from ${peripheral.id}`
  }


  // Decode the ArrayBuffer into a typed Array based on the data you expect

blenotify(deviceid){

 
  this.ble.startNotification(deviceid, '4fafc201-1fb5-459e-8fcc-c5c9c331914b', 'beb5483e-36e1-4688-b7f5-ea07361b26a8').subscribe(buffer => {
    
    this.data = new Uint32Array(buffer);

    this.a3km = (JSON.stringify(this.data));
    var djson = (JSON.stringify(this.data));
    this.score.push(this.data[0]);

    this.localNotifications.schedule({
      id: 1,
      title: 'UPDATE',
      text: this.score.slice(-1)[0].toString(10)
    });
 
    this.chartData = [
      { data: this.score, label: 'Account A' },

    ];
  });

}

  blestopnotify(deviceId: string, serviceUUID: string, characteristicUUID: string){
  this.ble.stopNotification(deviceId, serviceUUID, characteristicUUID)
}
  




  
updateData() {

  this.localNotifications.schedule({
    id: 1,
    title: 'Sync in progress',
    text: this.score.slice(-1)[0].toString(10)
  });

  this.scan();
  this.bleconnect("30:AE:A4:02:79:F2");

/*     this.chartData = [
      { data: [Math.floor(Math.random() * Math.floor(1000)), Math.floor(Math.random() * Math.floor(1000)), Math.floor(Math.random() * Math.floor(1000)), Math.floor(Math.random() * Math.floor(1000))], label: 'Account A' },
 
    ];

    */
}




  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];


  onChartClick(event) {
    console.log(event);
  }
   

}

