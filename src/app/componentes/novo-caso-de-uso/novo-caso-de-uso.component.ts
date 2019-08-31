import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CasoDeUso } from '../../models/caso-de-uso';
import { CasoDeUsoService } from '../../servicos/casoDeUso/caso-de-uso.service';

@Component({
  selector: 'app-novo-caso-de-uso',
  templateUrl: './novo-caso-de-uso.component.html',
  styleUrls: ['./novo-caso-de-uso.component.css']
})
export class NovoCasoDeUsoComponent implements OnInit {
  protected blockedPanel = false;
  protected edit = true;
  protected casoDeUso: CasoDeUso;
  private idProjeto = localStorage['projetoId'];

  constructor(
    private cduService: CasoDeUsoService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.casoDeUso = new CasoDeUso(
      undefined,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    );
  }

  /**
   * Navega para rota anterior.
   */
  cancelar(): void {
    this.location.back();
  }

  /**
   * Bloqueia a página e chama o método de salvar o caso de uso passando o objeto
   * para o serviço responsável por enviar e salvar no servidor.
   */
  salvarCasoDeUso(): void {
    this.blockedPanel = true;
    this.cduService.addCasoDeUso(this.casoDeUso)
      .subscribe((auxCdu => {
        this.location.back();
      }
      ));
  }

}
