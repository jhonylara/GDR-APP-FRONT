import { Integrante } from './../../models/integrante';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CasoDeUsoService } from './../../servicos/casoDeUso/caso-de-uso.service';
import { ProjetoService } from './../../servicos/projeto/projeto.service';
import { RequisitoService } from '../../servicos/requisito/requisito.service';
import { Projeto } from '../../models/projeto';
import { Requisito } from '../../models/requisito';
import { CasoDeUso } from '../../models/caso-de-uso';
import { Atividade } from '../../models/atividade';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  protected projeto: Projeto;
  protected requisitos: Requisito[];
  protected atividades: Atividade[];
  protected integrantes: Integrante[];

  constructor(
    private projetoService: ProjetoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProjeto();
  }

  /**
   * Busca o projeto para mostrar os dados.
   */
  getProjeto(): void {
    const id: number = +this.route.snapshot.paramMap.get('idProjeto');
    this.projetoService.getProjeto(id).subscribe(proj => {
      this.projeto = proj;
      this.requisitos = proj.requisitos;
      this.atividades = proj.atividades;
      this.integrantes = proj.integrantes;
    });
  }

  novoIntegrante() {
    this.router.navigate(['novo-integrante']);
  }
}
