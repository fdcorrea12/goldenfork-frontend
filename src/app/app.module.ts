import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoldenforkComponent } from './components/goldenfork/goldenfork.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdenesComponent,
    GoldenforkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
