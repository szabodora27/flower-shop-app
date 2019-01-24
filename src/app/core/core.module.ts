import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home.page.component';
import { AuthService } from './services/auth-service';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutComponent } from './components/layout/layout.component';

import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    HomePageComponent,
    MenuComponent,
    LayoutComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  entryComponents: [
    LoginComponent
  ]
})
export class CoreModule { }