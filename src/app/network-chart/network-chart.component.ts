import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, selectAll } from 'd3-selection';
import { scaleOrdinal } from 'd3-scale';
import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCollide,
  forceCenter,
} from 'd3-force';
import { line } from 'd3-shape';
import { schemePaired } from 'd3-scale-chromatic';
import { FriendsService } from '../friends/services/friends.service';
const d3 = {
  select,
  selectAll,
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCollide,
  forceCenter,
  scaleOrdinal,
  schemePaired,
  line,
};

@Component({
  selector: 'app-network-chart',
  templateUrl: './network-chart.component.html',
  styleUrls: ['./network-chart.component.scss'],
})
export class NetworkChartComponent implements OnInit {
  private _nodes: any;
  private _links: any;

  private _svg: any;
  private _simulation: any;
  private _currentNode: any = null;
  private _link: any;
  private _card: any;
  private _image: any;
  private _node: any;
  private _options = {
    width: null,
    height: null,
    margin: 100,
  };

  /**
   * Draws initial svg container for the chart
   */
  private drawChartSvg(): void {
    this._svg = d3
      .select('svg')
      .attr(
        'viewBox',
        '0 0 ' + this._options.width + ' ' + this._options.height
      )
      .attr('preserveAspectRatio', 'xMidYMid meet');
  }

  private onTick() {
    const lineGenerator = d3.line();
    const h = this._options.height;
    const w = this._options.width;
    // this._node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);
    this._node
      .attr('cx', function (d: any) {
        return (d.x = Math.max(40, Math.min(w - 40, d.x)));
      })
      .attr('cy', function (d: any) {
        return (d.y = Math.max(40, Math.min(h - 40, d.y)));
      });

    this._link.attr('d', (d: any) => {
      return lineGenerator([
        [d.source.x, d.source.y],
        [d.target.x, d.target.y],
      ]);
    });
  }

  private initializeSimulation() {
    this._simulation = d3
      .forceSimulation(this._nodes)
      .force('charge', d3.forceManyBody().strength(100))
      .force(
        'link',
        d3
          .forceLink(this._links)
          .id((d: any) => d.id)
          .distance(50)
      )
      .force('gravity', d3.forceManyBody().strength(1050))
      .force('collide', d3.forceCollide().radius(70))
      .force('manyBody', d3.forceManyBody().strength(400))
      .force(
        'center',
        d3.forceCenter(
          (this._options.width - this._options.margin) / 2,
          this._options.height / 2
        )
      )
      .on('tick', () => this.onTick());
  }

  private drawLinks() {
    this._link = this._svg
      .selectAll('path.link')
      .data(this._links)
      .enter()
      .append('path')
      .attr('stroke', '#fbae17')
      .attr('stroke-width', 1)
      .attr('fill', 'none');
  }

  private drawNodes() {
    this._node = this._svg
      .selectAll('circle')
      .data(this._nodes)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('r', (d: any) => 40)
      .attr('stroke', '#777')
      .attr('stroke-width', 1)
      .style('fill', (d: any) => 'blue');
  }

  constructor(private service: FriendsService) {}

  ngOnInit(): void {
    this._options.width = window.innerWidth;
    this._options.height = window.innerHeight - this._options.margin;
    this._nodes = this.service.network.users;
    this._links = this.service.network.links;

    this.drawChartSvg();
    this.initializeSimulation();
    this.drawLinks();
    this.drawNodes();
  }
}
