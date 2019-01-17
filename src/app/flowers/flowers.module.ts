import { NgModule } from '@angular/core';

import { FlowersRoutingModule } from './flowers-routing.module';
import { FlowerListPageComponent } from './pages/flower-list.page.component';
import { FlowersApiClientService } from './clients/flower-api-client.service';
import { FlowerDetailsPageComponent } from './pages/flower-details.page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FlowerListPageComponent,
    FlowerDetailsPageComponent
  ],
  imports: [
    SharedModule,
    FlowersRoutingModule
  ],
  providers: [FlowersApiClientService]
})
export class FlowersModule { }