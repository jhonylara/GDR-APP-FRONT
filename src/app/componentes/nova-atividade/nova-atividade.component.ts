import { Atividade } from './../../models/atividade';
import { Component, OnInit } from '@angular/core';
import { AtividadeService } from '../../servicos/atividade/atividade.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nova-atividade',
  templateUrl: './nova-atividade.component.html',
  styleUrls: ['./nova-atividade.component.css']
})
export class NovaAtividadeComponent implements OnInit {
  protected blockedPanel = false;
  protected edit = true;
  protected atividade: Atividade;
  private idProjeto = localStorage['projetoId'];

  constructor(
    private atvService: AtividadeService,
    private location: Location
  ) { }

  ngOnInit() {
    this.atividade = new Atividade(
      undefined,
      '',
      '',
      '',
      '',
      '',
      '',
      null,
      null,
      null
    );
  }

  /**
   * Navega para a rota anterior.
   */
  cancelar(): void {
    this.location.back();
  }

  /**
   * Bloqueia a página e chama o método de salvar a atividade passando o objeto
   * para o serviço responsável por enviar e salvar no servidor.
   */
  salvarAtividade(): void {
    this.blockedPanel = true;
    this.atvService.addAtividade(this.atividade)
      .subscribe((auxAtv => {
        this.location.back();
      }
      ));
  }
}
