import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Projeto } from '../../models/projeto';
import { ProjetoService } from '../../servicos/projeto/projeto.service';
import { Atividade } from '../../models/atividade';
import { AtividadeService } from '../../servicos/atividade/atividade.service';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {
  protected projeto: Projeto;
  protected atividades: Atividade[];
  protected blockedPanel = false;
  protected cols: any = [
    { field: 'idAtividade', header: 'ID' },
    { field: 'nome', header: 'Nome' },
    { field: 'status', header: 'Status' },
    { field: 'dataInicio', header: 'Data para Iniciar' },
    { field: 'dataFim', header: 'Data para Finalizar' },
    { field: 'criador', header: 'Criador' },
    { field: 'desenvolvedor', header: 'Desenvolvio por' },
    { field: 'acoes', header: 'Ações' }
  ];

  constructor(
    private router: Router,
    private atvService: AtividadeService
  ) { }

  ngOnInit() {
    ProjetoService.projeto.subscribe(proj => this.projeto = proj);
    this.getAtividades();
  }

  /**
   * Buscas atividades do projeto atraves do metodo do servico de atividades.
   */
  getAtividades(): void {
    this.blockedPanel = true;
    this.atvService.getAtividades().subscribe(
      atvs => (this.atividades = atvs, this.blockedPanel = false), () => this.blockedPanel = false
    );
  }

  /**
   * Navega para a rota de nova atividade.
   */
  novaAtividade(): void {
    this.router.navigate(['nova-atividade']);
  }

  /**
   * Navega para o componente que mostrará mais detalhes da atividade.
   *
   * @param id - id da atividade.
   */
  detalheAtividade(id: number): void {
    const rota = id + '/detalhe-atividade';
    this.router.navigate([rota]);
  }
}
