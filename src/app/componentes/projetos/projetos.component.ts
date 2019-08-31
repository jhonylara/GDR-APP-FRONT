import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message } from 'primeng/primeng';

import { Projeto } from './../../models/projeto';
import { ProjetoService } from '../../servicos/projeto/projeto.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
  providers: [ConfirmationService]
})
export class ProjetosComponent implements OnInit {
  protected projetos: Projeto[];
  protected blockedPanel = false;
  private usuarioId: number;
  private projetoSelecionado: Projeto;
  protected cols: any = [
    { field: 'idProjeto', header: 'Id' },
    { field: 'nome', header: 'Nome' },
    { field: 'dataInicio', header: 'Data inicial' },
    { field: 'dataFim', header: 'Data final' },
    { field: 'acao', header: 'Ação' }
  ];
  protected msgs: Message[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    private router: Router,
    private projetoService: ProjetoService
  ) { }

  ngOnInit() {
    this.blockedPanel = true;
    ProjetoService.projetoSelecionado.next(undefined);
    delete localStorage['projetoId'];
    this.projetoService.getProjetos()
      .subscribe(projs => (this.projetos = projs, this.blockedPanel = false), () => this.blockedPanel = false);
  }

  /**
   * Navega para o componente inicial do projeto, onde será mostrado mais informações do
   * projeto.
   *
   * @param idProjeto - id do projeto que será carregado.
   * @param proj - projeto que será carregado.
   */
  navegarInicio(idProjeto: number, proj: Projeto) {
    ProjetoService.projeto.next(proj);
    ProjetoService.projetoSelecionado.next(idProjeto);
    localStorage['projetoId'] = idProjeto;
    const rota = idProjeto + '/inicio';
    this.router.navigate([rota]);
  }

  /**
   * Navega para o componente para criar um novo projeto.
   */
  novoProjeto(): void {
    this.router.navigate(['novo-projeto']);
  }

  /**
   * Navega para o componente de detalhes do projeto, passando o id.
   *
   * @param id - passa o id que será colocado na rota.
   */
  detalheProjeto(idProjeto: number): void {
    const rota = idProjeto + '/detalhe-projeto';
    this.router.navigate([rota]);
  }

  /**
   * TODO: Método para deletar o projeto, passando o id.
   *
   * @param id - passa o id do projeto que será deletado.
   */
  // deletar(id: number) {
  //   this.projetoService.deleteProjeto(id).subscribe(
  //     deletou => console.log('deletou')
  //   );
  // }

  /**
   * TODO: Método do primeng, onde abre popup para confirmação da exclusão.
   */
  // confirmar() {
  //   this.confirmationService.confirm({
  //       message: 'Are you sure that you want to proceed?',
  //       header: 'Confirmation',
  //       icon: 'pi pi-exclamation-triangle',
  //       accept: () => {
  //           this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'You have accepted'}];
  //       },
  //       reject: () => {
  //           this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
  //       }
  //   });
  // }
}
