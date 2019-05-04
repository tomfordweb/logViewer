import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Import } from '../import.model';
import sample from './sample.js';

@Component({
  selector: 'csv-loader',
  templateUrl: './csv-loader.component.html',
  styleUrls: ['./csv-loader.component.scss']
})

export class CsvLoaderComponent implements OnInit {
  @Input() import: Import;
  @Output() upload: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  uploadedFile(event: any): void {
    const reader = new FileReader();
    const $this = this;

    reader.onload = () => this.upload.emit(reader.result)

    // start reading the file. When it is done, calls the onload event defined above.
    reader.readAsBinaryString(event.target.files[0]);
  }

  updatedText(event: any):void {
    this.upload.emit(event.target.value);
  }

  importSampleData() {
    this.upload.emit(sample);
  }
}
