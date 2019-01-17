import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { HomePageComponent } from './pages/home.page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CoreRoutingModule
  ]
})
export class CoreModule { }