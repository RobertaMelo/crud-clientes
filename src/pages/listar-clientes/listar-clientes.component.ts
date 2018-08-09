import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: ClienteDTO[];

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.buscaClientes();
  }

  buscaClientes() {
    this.clienteService.buscaTodos()
    .subscribe(response => {
      this.clientes = response['data'].customerList;
    }, error => {
      console.log('Não foram encontrados clientes [' + error + '].');
    });
  }

  editaCliente(cliente: ClienteDTO) {
    this.router.navigate(['cliente', cliente]);
  }

  excluiCliente(cliente: ClienteDTO) {
    this.clienteService.exclui(cliente.id)
    .subscribe(response => {
      console.log('Excluido com sucesso!');
      this.buscaClientes();
    }, error => {
      console.log(error);
    });
  }

}
