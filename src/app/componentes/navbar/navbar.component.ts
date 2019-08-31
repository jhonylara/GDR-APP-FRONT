import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjetoService } from '../../servicos/projeto/projeto.service';
import { UsuarioService } from '../../servicos/usuario/usuario.service';
import { Projeto } from '../../models/projeto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  protected projeto: string;
  protected token: string;
  protected projetoSelecionado: number;

  constructor(
    private projetoService: ProjetoService
  ) { }

  ngOnInit() {
    ProjetoService.projetoSelecionado.subscribe(
      proj => this.projetoSelecionado = proj
    );
    UsuarioService.token
      .subscribe(tkn => this.token = tkn);
  }
}
