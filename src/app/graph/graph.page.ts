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


@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})







export class GraphPage implements OnInit {
  

  constructor() {}

  
  
updateData() {
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
   







  






   ngOnInit() {

   


  } 



  



}

