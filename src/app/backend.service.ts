import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {shareReplay, map} from 'rxjs/operators'
import Log from './log.model';
import Heatmap from './heatmap.model';
import { Papa } from 'ngx-papaparse';



@Injectable({providedIn: 'root'})
export class BackendService {
  private readonly _log = new BehaviorSubject<Log>(null);
  private readonly _heatmap = new BehaviorSubject<Heatmap>(null);

  constructor(private papa: Papa) {
    this.heatmap = new Heatmap;
  }

  /**
   * Receive CSV input and parse it via a Papa wrapper for angular
   * @param {string} input csv string.
   */
  // @todo move this block of code to its own module
  setLog(input:string) {
    // see https://alberthaff.dk/projects/ngx-papaparse/docs/v3/parsing-csv
    // @todo optimizations
    this.papa.parse(input, {
      dynamicTyping: true, //converts values to their types
      fastMode: true, // will break if there are quotes, will probably cause bugs with some logs
      complete: (result):void => {
          this.log = new Log({...result});
        }
    });
  }

  get log():Log {
    return this._log.getValue();
  }

  set log(data) {
    this._log.next(data);
  }




  get heatmap():Heatmap {
    return this._heatmap.getValue();
  }

  set heatmap(data) {
    this._heatmap.next(data);
  }
}