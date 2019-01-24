import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowersModule } from './flowers/flowers.module';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: () => CoreModule },
  { path: 'flowers', component: LayoutComponent, loadChildren: () => FlowersModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }