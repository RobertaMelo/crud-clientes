import { Component, OnInit } from '@angular/core';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: ClienteDTO[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.buscaClientes();
  }

  buscaClientes() {
    this.clienteService.findAll()
    .subscribe(response => {
      this.clientes = response['data'].customerList;
    }, error => {
      console.log('Não foram encontrados clientes [' + error + '].');
    });
  }
}
