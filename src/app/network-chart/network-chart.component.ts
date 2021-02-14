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
import { schemeTableau10 } from 'd3-scale-chromatic';
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
  schemeTableau10,
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
  private _colorScale = d3.scaleOrdinal(d3.schemeTableau10);

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

    // positioning hover card
    if (this._currentNode !== null) {
      const r = this._currentNode?.r.baseVal.value || 0;
      const xPos = this._currentNode?.cx.baseVal.value + r + 3;
      const yPos = this._currentNode?.cy.baseVal.value + r + 3;
      this._card.attr('transform', `translate(${xPos},${yPos})`);
    }
    // this._node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);

    // positioning nodes
    this._node
      .attr('cx', function (d: any) {
        return (d.x = Math.max(40, Math.min(w - 40, d.x)));
      })
      .attr('cy', function (d: any) {
        return (d.y = Math.max(40, Math.min(h - 40, d.y)));
      });

    // positioning the links
    this._link.attr('d', (d: any) => {
      return lineGenerator([
        [d.source.x, d.source.y],
        [d.target.x, d.target.y],
      ]);
    });

    // positioning image inside node
    this._image.attr('transform', (d: any) => {
      return `translate(${d.x - 35}, ${d.y - 35})`;
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
      .attr('stroke', '#fbae17')
      .attr('stroke-width', 1)
      .style('fill', (d: any) => this._colorScale(d.id))
      .on('mouseover', this.onMouseOver)
      .on('mouseout', this.onMouseOut);
  }

  private onMouseOut = (event: any, d: any) => {
    this._currentNode = null;
    this._card.attr('display', 'none');
  };
  private onMouseOver = (event: any, d: any) => {
    this._currentNode = event.target;
    this._card.cardTextName.text(`${d.name}`);
    this._card.cardTextAge.text(`Age: ${d.age} yrs`);
    this._card.cardTextWeight.text(`Weight: ${d.weight} lbs`);

    this._card.attr('display', 'block');
    this._simulation.alphaTarget(0).restart();
  };

  private insertImage() {
    this._image = this._svg
      .selectAll('g')
      .data(this._nodes)
      .enter()
      .append('g');
    this._image
      .append('image')
      .attr('height', (d: any) => 70)
      .attr('width', (d: any) => 70)
      .attr('href', (d: any) => {
        var imagePath = `https://avatars.dicebear.com/4.5/api/avataaars/${
          d.name + d.age + d.weight
        }.svg?radius=50&mouth[]=smile&bold=1&fontSize=70&background=${encodeURIComponent(
          '#f7fde6'
        )}`;
        return imagePath;
      })
      .attr('pointer-events', 'none');
  }

  private hoverCard() {
    this._card = this._svg
      .append('g')
      .attr('pointer-events', 'none')
      .attr('display', 'none');

    this._card.cardBackground = this._card
      .append('rect')
      .attr('width', 175)
      .attr('height', 50)
      .attr('fill', 'white')
      .attr('stroke', '#fbae17')
      .attr('stroke-width', 2)
      .attr('rx', 5);

    this._card.cardTextName = this._card
      .append('text')
      .attr('font-size', 16)
      .attr('transform', 'translate(8, 20)')
      .text('');
    this._card.cardTextWeight = this._card
      .append('text')
      .attr('font-size', 12)
      .attr('transform', 'translate(8, 40)')
      .text('');
    this._card.cardTextAge = this._card
      .append('text')
      .attr('font-size', 12)
      .attr('transform', 'translate(100, 40)')
      .text('');
  }

  private generateChart() {
    this.drawLinks();
    this.drawNodes();
    this.insertImage();
    this.hoverCard();
  }

  constructor(private service: FriendsService) {}

  ngOnInit(): void {
    this._options.width = window.innerWidth;
    this._options.height = window.innerHeight - this._options.margin;
    this._nodes = this.service.network.users;
    this._links = this.service.network.links;

    this.drawChartSvg();
    this.initializeSimulation();
    this.generateChart();
  }
}
