import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { HeatmapCellComponent } from './heatmap-cell/heatmap-cell.component';

import { TableRoutingModule } from './table-routing.module';

@NgModule({
  declarations: [
    TableComponent,
    HeatmapCellComponent,
  ],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableViewModule { }
