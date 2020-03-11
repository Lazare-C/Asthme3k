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


@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})







export class GraphPage implements OnInit {
  score: Array<number> = [0];
  

  



   ngOnInit() {
  } 

  devices: any[] = [];
  public result: String = "Wsh bro";
  public a3km: String = "(-__-)";
  
  constructor(public ble: BLE) {


  }

  
  scan() {
    this.ble.startScan([]).subscribe(device => {
      this.result = JSON.stringify(device, null, 2);
    });

    setTimeout(() => {
      this.ble.stopScan();
    }, 5000);

  
}
 
  blebondedDevices(){
    this.ble.bondedDevices

  }


bleconnect(){
  this.ble.autoConnect('30:AE:A4:02:79:F2', this.onConnected.bind(this), this.onDisconnected.bind(this));
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
    
    let data = new Uint32Array(buffer);
    this.a3km = (JSON.stringify(data));
    var djson = (JSON.stringify(data));
    this.score.push(5)
    this.chartData = [
      { data: this.score, label: 'Account A' },

    ];
  });

}




  
updateData() {

  this.scan();

  this.bleconnect();

  const Http = new XMLHttpRequest();
  const url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    this.chartData = [
      { data: [Math.floor(Math.random() * Math.floor(1000)), Math.floor(Math.random() * Math.floor(1000)), Math.floor(Math.random() * Math.floor(1000)), Math.floor(Math.random() * Math.floor(1000))], label: 'Account A' },

    ];
  }


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

