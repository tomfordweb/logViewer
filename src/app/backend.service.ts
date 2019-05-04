import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {shareReplay, map} from 'rxjs/operators'
import Log from './log.model';
import { Papa } from 'ngx-papaparse';



@Injectable({providedIn: 'root'})
export class BackendService {
  private readonly _log = new BehaviorSubject<Log>(null);

  constructor(private papa: Papa) {}

  /**
   * Receive CSV input and parse it via a Papa wrapper for angular
   * @param {string} input csv string.
   */
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


}