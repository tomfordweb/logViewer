import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsvLoaderComponent } from './csv-loader/csv-loader.component';
import { PapaParseModule } from 'ngx-papaparse';
import { TableViewComponent } from './table-view/table-view.component';
import { LineViewComponent } from './line-view/line-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTable, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { HeatmapCellComponent } from './heatmap-cell/heatmap-cell.component';
import { MinMaxRowsComponent } from './table-view/min-max-rows/min-max-rows.component';
@NgModule({
  declarations: [
    AppComponent,
    CsvLoaderComponent,
    TableViewComponent,
    LineViewComponent,
    PageNotFoundComponent,
    HeatmapCellComponent,
    MinMaxRowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PapaParseModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // see https://github.com/FortAwesome/angular-fontawesome
  constructor() {
    library.add(faTable,faChartLine);
  }
}
