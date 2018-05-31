import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { ListaEstagiarioComponent } from './estagiario/lista-estagiario/lista-estagiario.component';
import { CadastroEstagiarioComponent } from './estagiario/cadastro-estagiario/cadastro-estagiario.component';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { EstagiarioService } from './service/estagiario.service';
import { HttpClient, HttpHandler  } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {ItensEstagiarios} from './estagiario/lista-itens/itens.estagiarios'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
   
    ListaEstagiarioComponent,
    CadastroEstagiarioComponent,
    ItensEstagiarios
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EstagiarioService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
