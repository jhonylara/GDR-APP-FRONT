import { Integrante } from './../../models/integrante';
import { Component, OnInit } from '@angular/core';
import { Projeto } from '../../models/projeto';
import { Router } from '@angular/router';
import { IntegranteService } from '../../servicos/integrante/integrante.service';
import { ProjetoService } from '../../servicos/projeto/projeto.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements OnInit {
  protected projeto: Projeto;
  protected integrantes: Integrante[];
  protected blockedPanel = false;
  protected cols: any = [
    { field: 'id', header: 'ID' },
    { field: 'nome', header: 'Nome' },
    { field: 'perfil', header: 'Perfil' },
    { field: 'acoes', header: 'Ações' }
  ];

  constructor(
    private router: Router,
    private intService: IntegranteService
  ) { }

  ngOnInit() {
    ProjetoService.projeto.subscribe(proj => this.projeto = proj);
    this.getIntegrantes();
  }

  /**
   * Buscas integrantes do projeto atraves do metodo do servico de integrantes.
   */
  getIntegrantes(): void {
    this.blockedPanel = true;
    this.intService.getIntegrantes().subscribe(
      ints => (this.integrantes = ints, this.blockedPanel = false),
      () => this.blockedPanel = false
    );
  }

  /**
   * Navega para a rota de novo integrante.
   */
  novoIntegrante(): void {
    this.router.navigate(['novo-integrante']);
  }

  /**
   * Navega para o componente que mostrará mais detalhes do integrante.
   *
   * @param id - id da atividade.
   */
  detalheIntegrante(id: number): void {
    const rota = id + '/detalhe-integrante';
    this.router.navigate([rota]);
  }
}
