import { Component } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title:string = 'logViewer';
  constructor(public store: BackendService) {}

  onUploadCsv(result) {
    this.store.setImport(result);
  }
}
