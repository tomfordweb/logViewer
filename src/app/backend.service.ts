import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {shareReplay, map} from 'rxjs/operators'
import { Import } from './import.model';
import Log from './log.model';
import { Papa } from 'ngx-papaparse';


@Injectable({providedIn: 'root'})

export class BackendService {

  private readonly _inputCsv = new BehaviorSubject<Import[]>([]);
  private readonly _data = new BehaviorSubject<Log[]>([]);

  constructor(private papa: Papa) {}
  get csv(): Import[] {
    return this._inputCsv.getValue();
  }

  set csv(val: Import[]) {
    this._inputCsv.next(val);
  }

  get data(): Log[] {
    return this._data.getValue();
  }

  set data(data) {
    this._data.next(data);
  }

  setData(input) {
    // see https://alberthaff.dk/projects/ngx-papaparse/docs/v3/parsing-csv
    this.papa.parse(input, {
      header: true, //turns output into array of objects with keys, necessary for filtering
      dynamicTyping: true, //converts to their types
      fastMode: true, // will break if there are quotes, will probably cause bugs with some logs
      complete: (result) => {
        console.log('Parsed: ', result);
        this.data = result;
      }
    });
  }

  setImport(data) {
    this.csv = data;
    this.setData(data);
  }
}