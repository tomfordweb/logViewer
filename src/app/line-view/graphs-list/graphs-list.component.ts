import { Component, OnInit } from '@angular/core';
import { BackendService } from '@app/backend.service';

@Component({
  selector: 'graphs-list',
  templateUrl: './graphs-list.component.html',
  styleUrls: ['./graphs-list.component.scss'],
})
export class GraphsListComponent implements OnInit {

  constructor(public store: BackendService) { }

  ngOnInit() {
  }

}
