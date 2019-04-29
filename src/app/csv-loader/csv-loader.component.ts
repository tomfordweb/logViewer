import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'csv-loader',
  templateUrl: './csv-loader.component.html',
  styleUrls: ['./csv-loader.component.scss']
})
export class CsvLoaderComponent implements OnInit {
  csvInput = '';

  constructor() { }

  ngOnInit() {

  }

  changeListener(event: any): void {
    const reader = new FileReader();
    const $this = this;

    reader.onload = () => $this.csvInput = reader.result;

    // start reading the file. When it is done, calls the onload event defined above.
    reader.readAsBinaryString(event.target.files[0]);
  }
}
