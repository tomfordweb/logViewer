import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heatmap-cell',
  template: '<span><ng-content></ng-content></span>',
  styleUrls: ['./heatmap-cell.component.scss']
})
export class HeatmapCellComponent implements OnInit {

  @Input() key:string;
  @Input() value:any;

  constructor() { }

  ngOnInit() {
  }

}
