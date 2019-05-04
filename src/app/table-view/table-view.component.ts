import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  rows:Array<{any}>;
  log:Array<object>;

  @Input() data:any;

  constructor(public store: BackendService) {
    this.log = store.log;
    console.log(store.log);
    this.rows = store.log.data;

  }

  sortBy(key) {
    this.rows = this.store.log.sortByAsc(key);
  }

  ngOnInit() {
  }

}
