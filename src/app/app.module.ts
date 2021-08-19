import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { CarListComponent } from './car-list/car-list.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftbarComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
