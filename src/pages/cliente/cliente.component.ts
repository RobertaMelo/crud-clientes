import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { ClienteDTO } from '../../models/cliente.dto';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  sub: any;
  formGroup: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) { 
    this.formGroup = this.formBuilder.group({
      id: [null, []],
      name: ['', [Validators.required]],
      federalId: ['', [Validators.required]],
      registration: [null, []],
      phone: ['', [Validators.required]],
      phone2: ['', []],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]],
      emailCollection: ['', [Validators.required]],
      residentialPhone: ['', []],
      commercialPhone: ['', []],
      emergencyContact: ['', []],
      emergencyPhone: ['', []],
      birthday: [null, []],
      gender: ['F', [Validators.required]],
      federalIdType: ['Physical', []],
      active: [true, []]
    });
  }

  ngOnInit() {
    this.iniciaNovoCliente();
    this.sub = this.route.params.subscribe((cliente: ClienteDTO) => {
      this.selecionaCliente(cliente);
    });
  }

  iniciaNovoCliente() {
    this.formGroup.reset();
    this.formGroup.controls.active.setValue(true);
    this.formGroup.controls.gender.setValue('F');
    this.formGroup.controls.federalIdType.setValue('Physical');
  }

  selecionaCliente(cliente : ClienteDTO) {
    if (cliente.id == undefined) {
      return;
    }
    this.formGroup.controls.id.setValue(cliente.id);
    this.formGroup.controls.name.setValue(this.getEmptyIfNull(cliente.name));
    this.formGroup.controls.federalId.setValue(this.getEmptyIfNull(cliente.federalId));
    this.formGroup.controls.registration.setValue(this.getEmptyIfNull(cliente.registration));
    this.formGroup.controls.phone.setValue(this.getEmptyIfNull(cliente.phone));
    this.formGroup.controls.phone2.setValue(this.getEmptyIfNull(cliente.phone2));
    this.formGroup.controls.email.setValue(this.getEmptyIfNull(cliente.email));
    this.formGroup.controls.emailCollection.setValue(this.getEmptyIfNull(cliente.emailCollection));
    this.formGroup.controls.residentialPhone.setValue(this.getEmptyIfNull(cliente.residentialPhone));
    this.formGroup.controls.commercialPhone.setValue(this.getEmptyIfNull(cliente.commercialPhone));
    this.formGroup.controls.emergencyContact.setValue(this.getEmptyIfNull(cliente.emergencyContact));
    this.formGroup.controls.emergencyPhone.setValue(this.getEmptyIfNull(cliente.emergencyPhone));
    this.formGroup.controls.birthday.setValue(this.formataData(Number(cliente.birthday)));
    this.formGroup.controls.gender.setValue(cliente.gender);
    this.formGroup.controls.federalIdType.setValue(cliente.federalIdType);
    this.formGroup.controls.active.setValue(cliente.active);
    
  }

  salvaCliente() {
    if (this.formGroup.controls.id.value == null) {
      this.clienteService.salva(this.formGroup.value)
      .subscribe(response => {
       console.log('Salvo com sucesso!');
        this.iniciaNovoCliente();
      }, error => {
        console.log(error);
      });
      return;
    } 
    
    this.clienteService.altera(this.formGroup.value)
    .subscribe(response => {
      console.log('Alterado com sucesso!');
      this.iniciaNovoCliente();
    }, error => {
      console.log(error);
    });
  }

  formataData(date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = ''+ (d.getDate()),
      year = d.getFullYear();
    console.log(date)
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
  trocaAtivo() {
  this.formGroup.controls.active.setValue(this.formGroup.controls.active.value);
  }

  getEmptyIfNull(objeto) {
  if (objeto != null) {
      return objeto;
  }
  return "";
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
