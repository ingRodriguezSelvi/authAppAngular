import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      AppRoutingModule,
      BrowserModule,
      HttpClientModule,
      RouterModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
