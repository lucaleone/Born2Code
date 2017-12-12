import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import {FilterService} from "./filter-service.service";
import {DataService} from "./data.service";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ListaUtentiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilterService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
