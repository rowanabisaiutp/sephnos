import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { Metodo1Component } from './metodos/metodo1/metodo1.component';
import { Metodo2Component } from './metodos/metodo2/metodo2.component';
import { Metodo3Component } from './metodos/metodo3/metodo3.component';
import { Metodo4Component } from './metodos/metodo4/metodo4.component';
import { CRUDComponent } from './home/crud/crud.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Metodo1Component,
    Metodo2Component,
    Metodo3Component,
    Metodo4Component,
    CRUDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
