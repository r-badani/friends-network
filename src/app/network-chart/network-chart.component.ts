import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-network-chart',
  templateUrl: './network-chart.component.html',
  styleUrls: ['./network-chart.component.scss']
})
export class NetworkChartComponent implements OnInit {
  @ViewChild('network') _svg: ElementRef<any>;

  private _chart = {
    _simulation: null,
    _currentNode: null,
    _link: null,
    _node: null,
    _width: null,
    _height: null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
