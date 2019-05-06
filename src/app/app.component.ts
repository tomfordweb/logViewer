import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';
import sample from './csv-loader/sample.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title:string = 'logViewer';
  showAppSettings:boolean = false;
  constructor(public store: BackendService) {}

  toggleSettingsVisible(event) {
    this.showAppSettings = !this.showAppSettings;
  }

  // for dev purposes, saves clicking a button lol
  ngOnInit() {
    this.store.setLog(sample);
  }
}
