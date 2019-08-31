import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Projeto } from '../../models/projeto';
import { ProjetoService } from '../../servicos/projeto/projeto.service';

@Component({
  selector: 'app-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent implements OnInit {
  protected blockedPanel = false;
  protected msgErroProjeto = 'Os campos sao obrigatorios';
  protected projeto: Projeto;
  protected edit = true;

  constructor(
    private projetoService: ProjetoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.projeto = new Projeto(
      undefined,
      '',
      '',
      '',
      [],
      [],
      []
    );
  }

  /**
   * Navega para a rota inicial ao clicar em cancelar.
   */
  cancelar(): void {
    this.router.navigate(['/']);
  }

  /**
   * Bloqueia a página e chama o método de salvar o projeto passando o objeto para o serviço
   * responsável por enviar e salvar no servidor.
   */
  salvarProjeto(): void {
    this.blockedPanel = true;
    this.projetoService.addProjeto(this.projeto).subscribe(
      () => (this.blockedPanel = false, this.router.navigate(['/'])),
      errorProjeto => (this.blockedPanel = false, this.msgErroProjeto = errorProjeto.error)
    );
  }

}
