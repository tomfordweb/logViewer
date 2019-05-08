import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import Log from '@app/log.model';

@Component({
  selector: 'line-view-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @Input() data:[any];
  @Input() header:string;
  @Input() xAxis:[any];

  public elementWidth: 300;
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
  };
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[];
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor() {}

  ngOnInit() {
    console.log('rendering line graph');
    this.lineChartData = [
      {
        data: this.data,
        label: this.header,
        pointRadius: 0,
      },
    ];


    this.lineChartLabels  = this.xAxis;
  }

}
