import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  rows:Array<{any}>;
  log:Array<string>;

  @Input() data:any;

  constructor(public store: BackendService) {
    this.log = store.log;
    this.rows = this.log.data;
  }

  sortBy(key) {
    console.log(this.log.sortBy(key));
    this.rows = this.log.sortBy(key);
  }

  ngOnInit() {
  }

}
