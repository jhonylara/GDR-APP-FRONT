import { Requisito } from './../../models/requisito';
import { Component, OnInit } from '@angular/core';
import { Projeto } from '../../models/projeto';
import { ProjetoService } from '../../servicos/projeto/projeto.service';
import { RequisitoService } from '../../servicos/requisito/requisito.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-requisito',
  templateUrl: './requisito.component.html',
  styleUrls: ['./requisito.component.css']
})
export class RequisitoComponent implements OnInit {
  protected projeto: Observable<Projeto>;
  protected blockedPanel = false;
  protected requisitos: Requisito[];
  protected cols: any = [
    { field: 'idRequisito', header: 'ID do requisito' },
    { field: 'nome', header: 'Nome' },
    { field: 'categoria', header: 'Categoria' },
    { field: 'impotancia', header: 'Prioridade' },
    { field: 'acao', header: 'Ação' }
  ];

  constructor(
    private router: Router,
    private requisitoService: RequisitoService
  ) { }

  ngOnInit() {
    this.projeto = ProjetoService.projeto.asObservable();
    this.getRequisitos();
  }

  /**
   * Método que busca os requisitos para listar.
   */
  getRequisitos(): void {
    this.blockedPanel = true;
    this.requisitoService.getRequisitos().subscribe(
      reqs => (this.requisitos = reqs, this.blockedPanel = false), () => this.blockedPanel = false
    );
  }

  /**
   * Navega para componente de criação de novo requisito.
   */
  novoRequisito(): void {
    this.router.navigate(['novo-requisito']);
  }

  /**
   * Navega para o componente que mostrará mais detalhes do requisito.
   *
   * @param id - id do requisito que será passado para a rota.
   */
  detalheRequisito(id: number): void {
    this.router.navigate([id + '/detalhe-requisito']);
  }

  /**
   * Método para deletar um requisito, passando o id para o método do serviço.
   *
   * @param id - id do requisito que será deletado.
   */
  deletar(id: number) {
    this.requisitoService.deleteRequisito(id).subscribe(
      deletou => console.log('deletou')
    );
  }

}
