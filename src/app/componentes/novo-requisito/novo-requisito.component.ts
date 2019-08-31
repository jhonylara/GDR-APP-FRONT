import { RequisitoService } from './../../servicos/requisito/requisito.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Requisito } from '../../models/requisito';

@Component({
  selector: 'app-novo-requisito',
  templateUrl: './novo-requisito.component.html',
  styleUrls: ['./novo-requisito.component.css']
})
export class NovoRequisitoComponent implements OnInit {
  protected blockedPanel = false;
  protected edit = true;
  protected requisito: Requisito;
  protected msgErroRequisito = 'Os campos sao obrigatorios';

  constructor(
    private requisitoService: RequisitoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.requisito = new Requisito(
      undefined,
      '',
      '',
      '',
      '',
      '',
      '',
      null,
      null
    );
  }

  /**
   * Navega para rota anterior.
   */
  cancelar(): void {
    this.location.back();
  }

  /**
   * Bloqueia a página e chama o método de salvar o requisito passando o objeto para o serviço
   * responsável por enviar e salvar no servidor.
   */
  salvarRequisito(): void {
    this.blockedPanel = true;
    this.requisitoService.addRequisito(this.requisito).subscribe(
      auxRqt => (
        this.location.back(),
        this.blockedPanel = false
      ),
      erroRequisito => {
        if (erroRequisito.error === 'org.hibernate.exception.ConstraintViolationException: could not execute statement') {
          this.msgErroRequisito = ' Digite apenas número no ID requisito',
            this.blockedPanel = false;
        } else {
          this.msgErroRequisito = erroRequisito.error;
          this.blockedPanel = false;
        }
      }
    );
  }

}
