import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";  //importação de biblioteca do angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { Titulo2Component } from './titulo2/titulo2.component';
import { HomeComponent } from './home/home.component';
import { TarefasComponent } from './Model/tarefas.component';
import { BuscaComponent } from './busca/busca.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    Titulo2Component,
    HomeComponent,
    TarefasComponent,
    BuscaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule//importação de biblioteca do angular 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
