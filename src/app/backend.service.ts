import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {shareReplay, map} from 'rxjs/operators'
import { Import } from './import.model';

@Injectable({providedIn: 'root'})
export class BackendService {

  private readonly _inputCsv = new BehaviorSubject<Import[]>([]);

  get csv(): Import[] {
    return this._inputCsv.getValue();
  }

  set csv(val: Import[]) {
    this._inputCsv.next(val);
  }


  setImport(data) {
    console.log(data);
    this.csv = data;
  }
}