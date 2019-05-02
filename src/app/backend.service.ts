import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {shareReplay, map} from 'rxjs/operators'
import { Import } from './import.model';
import Log from './log.model';
import { Papa } from 'ngx-papaparse';

@Injectable({providedIn: 'root'})

export class BackendService {

  private readonly _inputCsv = new BehaviorSubject<Import[]>([]);
  private readonly _log = new BehaviorSubject<Log>();

  constructor(private papa: Papa) {}


  /**
   * Receive CSV input and parse it via a Papa wrapper for angular
   * @param {string} input csv string.
   */
  setLog(input:string) {
    // see https://alberthaff.dk/projects/ngx-papaparse/docs/v3/parsing-csv
    this.papa.parse(input, {
      header: true, //turns output into array of objects with keys, necessary for filtering
      dynamicTyping: true, //converts to their types
      fastMode: true, // will break if there are quotes, will probably cause bugs with some logs
      complete: (result) => {
          this.log = new Log(result);
        }

    });
  }

  setImport(data) {
    this.csv = data;
    this.setLog(data);
  }

  get csv(): Import[] {
    return this._inputCsv.getValue();
  }

  set csv(val: Import[]) {
    this._inputCsv.next(val);
  }

  get log(): Log {
    return this._log.getValue('data');
  }

  set log(data) {
    this._log.next(data);
  }


}