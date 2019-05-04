import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { LineViewRoutingModule } from './line-view-routing.module';
import { GraphsListComponent } from './graphs-list/graphs-list.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
  GraphsListComponent,
  GraphComponent
  ],
  imports: [
    CommonModule,
    LineViewRoutingModule,
    ChartsModule
  ]
})
export class LineViewModule { }
