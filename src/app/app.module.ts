import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {SQLite} from "@awesome-cordova-plugins/sqlite/ngx"
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AuthGuard } from 'src/app/services/auth-guard.service';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular';

import { AuthenticationService } from '../app/services/authentication.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),HttpClientModule],
  providers: [AuthenticationService,AuthGuard,SQLite,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

