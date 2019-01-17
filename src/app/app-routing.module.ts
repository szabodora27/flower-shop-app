import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowersModule } from './flowers/flowers.module';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', loadChildren: () => CoreModule },
  { path: 'flowers', loadChildren: () => FlowersModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }