import { Projeto } from './../../models/projeto';
import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../../servicos/projeto/projeto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-projeto',
  templateUrl: './detalhe-projeto.component.html',
  styleUrls: ['./detalhe-projeto.component.css']
})
export class DetalheProjetoComponent implements OnInit {
  protected blockedPanel = false;
  protected edit = false;
  protected projeto: Projeto;
  protected permissao: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projetoService: ProjetoService
  ) { }

  ngOnInit() {
    this.getProjeto();
    if (localStorage['perfilIntegrante'] === 'Gerente' || localStorage['perfilIntegrante'] === 'Analista') {
      this.permissao = true;
    } else { this.permissao = false; }
  }

  /**
   * Redireciona para página inicial caso clique em cancelar.
   */
  cancelar(): void {
    this.router.navigate(['/']);
  }

  /**
   * Busca projeto selecionado pela id através da url.
   */
  getProjeto(): void {
    this.blockedPanel = true;
    const id: number = +this.route.snapshot.paramMap.get('idProjeto');
    this.projetoService.getProjeto(id).subscribe(
      (proj: Projeto) => {
        this.projeto = proj;
        this.blockedPanel = false;
        if (this.projeto === undefined) {
          this.router.navigate(['not-fount']);
        }
      }, () => this.blockedPanel = false
    );
  }

  /**
   * Bloqueia o painel de formulário e salva os dados editados.
   */
  salvarEdicao(): void {
    this.blockedPanel = true;
    this.projetoService.editProjeto(this.projeto.idProjeto, this.projeto)
      .subscribe((auxProj => {
        this.router.navigate(['/']);
      })
      );
  }

  deletar() {
    const id: number = +this.route.snapshot.paramMap.get('idProjeto');
    this.projetoService.deleteProjeto(id).subscribe(
      deletou => this.router.navigate(['/'])
    );
  }

}
