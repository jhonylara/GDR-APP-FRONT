import { Atividade } from './../../models/atividade';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AtividadeService } from '../../servicos/atividade/atividade.service';

@Component({
  selector: 'app-detalhe-atividade',
  templateUrl: './detalhe-atividade.component.html',
  styleUrls: ['./detalhe-atividade.component.css']
})
export class DetalheAtividadeComponent implements OnInit {
  protected blockedPanel = false;
  protected edit = false;
  protected atividade: Atividade;
  protected permissao: boolean;

  protected deletarAtividadeLog = false;
  protected erroDeletarAtividade = false;
  protected msgErroDeletarAtividade: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private atividadeService: AtividadeService
  ) { }

  ngOnInit() {
    this.getAtividade();
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
   * Busca integrante selecionado pela id através da url.
   */
  getAtividade(): void {
    this.blockedPanel = true;
    const id: number = +this.route.snapshot.paramMap.get('idAtividade');
    this.atividadeService.getAtividade(id).subscribe(
      (atv: Atividade) => {
        this.blockedPanel = false;
        console.log(atv);
        this.atividade = atv;
        if (this.atividade === undefined) {
          this.router.navigate(['not-fount']);
        }
      },
      (error) => this.blockedPanel = false
    );
  }

  /**
   * Bloqueia o painel de formulário e salva os dados editados.
   */
  salvarEdicao(): void {
    this.blockedPanel = true;
    this.atividadeService.editAtividade(this.atividade.idAtividade, this.atividade)
      .subscribe((auxProj => {
        this.router.navigate(['/']);
      })
      );
  }

  deletar() {
    const id: number = +this.route.snapshot.paramMap.get('idAtividade');
    this.atividadeService.deleteAtividade(id).subscribe(
      deletou => this.router.navigate(['/']),
      errorDeletar => (
        this.msgErroDeletarAtividade = errorDeletar.error,
        this.deletarAtividadeLog = true,
        this.erroDeletarAtividade = true
      )
    );
  }
}
