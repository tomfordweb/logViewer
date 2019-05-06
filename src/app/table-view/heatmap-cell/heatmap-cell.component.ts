import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heatmap-cell',
  template: '<span style.background-color="hsla({{color}})"></span>',
  styles: ['span {position: absolute; top: 0; left: 0; right: 0; bottom: 0;']
})
export class HeatmapCellComponent implements OnInit {

  @Input() minMax:any;
  @Input() value:any;
  color:string;

  constructor() { }

  /**
   * Between a range of min and max, calculate the percentage that input is at.
   *
   * @param {number} min   The starting number
   * @param {number} max   The ending number
   * @param {number} input The recorded value.
   * @return {number} a number ranging from 1 to 100
   *
   */
  morph(min:number, max:number, input:number):number {
    return Math.round((input - min) * 100) / (max - min);
  }

  ngOnInit() {
    const {
      value,
      morph
    } = this;

    this.color = `${100 - morph(this.minMax.min,this.minMax.max,value)}, 100%, 50%, 0.3`;
  }

}
