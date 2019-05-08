import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsvLoaderComponent } from './csv-loader/csv-loader.component';
import { PapaParseModule } from 'ngx-papaparse';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTable, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';

import { BackendService } from './backend.service';

@NgModule({
  declarations: [
    AppComponent,
    CsvLoaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PapaParseModule,
    FontAwesomeModule
  ],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // see https://github.com/FortAwesome/angular-fontawesome
  constructor() {
    library.add(faTable,faChartLine, faCogs);
  }
}
