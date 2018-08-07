import { Routes } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { ClienteComponent } from './cliente/cliente.component';

export const appRoutes: Routes = [
  { 
    path: '', 
    component: ListarClientesComponent 
  },
  { 
    path: 'listar-clientes', 
    component: ListarClientesComponent 
  },
  {
    path: 'cliente/:id',
    component: ClienteComponent
  },
  { 
    path: '**', 
    redirectTo: ''
  }
];