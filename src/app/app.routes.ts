import { Routes } from '@angular/router';
import { ListarClientesComponent } from '../pages/listar-clientes/listar-clientes.component';
import { ClienteComponent } from '../pages/cliente/cliente.component';


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
    path: 'cliente',
    component: ClienteComponent
  },
  { 
    path: '**', 
    redirectTo: ''
  }
];