import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../backend.service';
import Log from '../log.model';
@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  rows:Array<{any}>;
  log:Log;
  sortKey:number = 0;
  sortOrder:string = 'asc';

  @Input() data:any;

  constructor(public store: BackendService) {
    this.log = store.log;
    this.rows = store.log.data;

  }

  sortBy(key) {
    // determine if order is different before updating sortKey
    const changeOrdering = (key == this.sortKey) ? true : false;
    this.sortKey = key;

    if(changeOrdering) {
      this.sortOrder = (this.sortOrder === 'asc')
        ? 'desc'
        : 'asc';
    }

    this.rows = (this.sortOrder === 'asc')
      ? this.store.log.sortByAsc(key)
      : this.store.log.sortByDesc(key);
  }

  ngOnInit() {
  }

}
