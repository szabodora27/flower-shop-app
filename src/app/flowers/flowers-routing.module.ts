import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowerListPageComponent } from './pages/flower-list.page.component';
import { FlowerDetailsPageComponent } from './pages/flower-details.page.component';

const routes: Routes = [
  { path: '', component: FlowerListPageComponent },
  { path: ':id', component: FlowerDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowersRoutingModule { }