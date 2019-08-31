import { UsuarioService } from './../../servicos/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {
  protected usuario: string;
  constructor(private userService: UsuarioService) { }

  ngOnInit() {
    this.usuario = localStorage['nome'];
  }

  /**
   * Chama método logout do serviço de usuário.
   */
  logout(): void {
    this.userService.logout();
  }

}
