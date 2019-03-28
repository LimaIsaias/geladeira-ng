import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, InputTextModule, CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
