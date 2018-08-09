import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListarClientesComponent } from '../pages/listar-clientes/listar-clientes.component';
import { ClienteComponent } from '../pages/cliente/cliente.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
