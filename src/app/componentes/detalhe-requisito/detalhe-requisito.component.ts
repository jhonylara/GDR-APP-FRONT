import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Requisito } from '../../models/requisito';
import { RequisitoService } from '../../servicos/requisito/requisito.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalhe-requisito',
  templateUrl: './detalhe-requisito.component.html',
  styleUrls: ['./detalhe-requisito.component.css']
})
export class DetalheRequisitoComponent implements OnInit {
  protected requisito: Requisito;
  protected edit = false;
  protected blockedPanel = false;
  protected permissao: boolean;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private requisitoService: RequisitoService
  ) { }

  ngOnInit() {
    this.getRequisito();
    if (localStorage['perfilIntegrante'] === 'Gerente' || localStorage['perfilIntegrante'] === 'Analista') {
      this.permissao = true;
    } else { this.permissao = false; }
  }

  /**
   * Busca requisito pegando id da url.
   */
  getRequisito(): void {
    this.blockedPanel = true;
    const id: number = +this.route.snapshot.paramMap.get('idRequisito');
    this.requisitoService.getRequisito(id)
      .subscribe(
        (rqt: Requisito) => {
          this.blockedPanel = false;
          this.requisito = rqt;
          this.requisito.id = id;
          if (this.requisito === undefined) {
            this.router.navigate(['not-found']);
          }
        }, () => this.blockedPanel = false
      );
  }

  /**
   * Redireciona para rota anterior;
   */
  cancelar(): void {
    this.location.back();
  }

  /**
   * Bloqueia o painel de formulario e salva os dados editados do requisito.
   */
  salvarEdicao(): void {
    this.blockedPanel = true;
    this.requisitoService.editRequisito(this.requisito.id, this.requisito)
      .subscribe((auxRqt => {
        this.location.back();
      })
      );
  }

  /**
   * Deleta o requisito e redireciona para a rota anterior.
   */
  deletar(): void {
    const id: number = +this.route.snapshot.paramMap.get('idRequisito');
    this.requisitoService.deleteRequisito(id).subscribe(
      deletou => this.location.back()
    );
  }
}
