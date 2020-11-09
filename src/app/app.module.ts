import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AzureDeveopComponent } from './azure-deveop/azure-deveop.component';
import {HttpClientModule} from '@angular/common/http';
import {ServicesService} from '../services/services.service'

@NgModule({
  declarations: [
    AppComponent,
    AzureDeveopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
