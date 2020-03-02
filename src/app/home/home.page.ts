import { Component } from '@angular/core';
import { GraphPage } from '../graph/graph.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
  graph = GraphPage;
  constructor() {}

}
