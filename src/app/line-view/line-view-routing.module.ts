import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphsListComponent } from './graphs-list/graphs-list.component';

const routes: Routes = [
{
  path: '',
  component: GraphsListComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineViewRoutingModule { }
