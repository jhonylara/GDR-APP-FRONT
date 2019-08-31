import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { URLSERVER } from '../../../environments/environment';
import { ILogin } from '../../interfaces/login.interface';
import { Login } from '../../models/login';
import { Usuario } from '../../models/usuario';
import { IUsuario } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public static msgErro = new Subject<string>();
  public static token = new ReplaySubject<string>(1);
  private urlServer = 'http://localhost:3000/';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  /**
   * Gera uma interface de login para enviar.
   *
   * @param login - model login.
   */
  private geraInterfaceLogin(login: Login): ILogin {
    const iLog: ILogin = {
      email: login.email,
      senha: login.password
    };
    return iLog;
  }

  /**
   * Envia interface de login, pega token, nome e id do usuário e coloca
   * em localStorage.
   *
   * @param login - interface login a ser enviada.
   */
  auth(login: Login): Observable<void> {
    const iLog = this.geraInterfaceLogin(login);
    let token: string;
    return this.http.post<Response>(`${URLSERVER}/auth`, iLog)
      .map((response: any) => {
        token = localStorage['token'] = response.token;
        UsuarioService.token.next(token);

        if (localStorage['nome'] === response['nome']) {
          localStorage['nome'] = response['nome'];
        } else {
          localStorage['nome'] = response['nome'];
          localStorage['id'] = response.id;
        }
      });
  }

  /**
   * Recarrega a página. Usado no método auth e no interceptor.
   */
  reload(): void {
    location.reload(true);
  }

  /**
   * Remove todos os dados do localStorage e recarrega. Redirecionado para página de login.
   */
  logout(): void {
    delete localStorage['nome'];
    delete localStorage['token'];
    delete localStorage['id'];
    delete localStorage['projetoId'];
    delete localStorage['perfilIntegrante'];
    location.reload();
  }

  cadastrarUsuario(usuario: Usuario): Observable<Response> {
    const ICadastroUsuario = {
      'nome': usuario.nome,
      'email': usuario.email,
      'senha': usuario.senha
    };

    return this.http.post<Response>(`${URLSERVER}`, ICadastroUsuario);
  }

  esqueceuSenha(usuario: Usuario): Observable<Response> {
    const IEsqueceuSenha = {
      email: usuario.email
    };

    return this.http.post<Response>(`${URLSERVER}/esqueceu-senha`, IEsqueceuSenha);
  }

  trocarSenha(usuario: Usuario, codigo: string) {
    const ITrocarSenha = {
      email: usuario.email,
      senha: usuario.senha
    };

    return this.http.post<Response>(`${URLSERVER}/valida-senha/${codigo.toLocaleUpperCase()}`, ITrocarSenha);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<IUsuario[]>(
      `${URLSERVER}/list`
    ).map(
      (IUsuarios: IUsuario[]) => {
        return IUsuarios.map(
          (iUser: IUsuario) => new Usuario(
            iUser.id,
            iUser.nome,
            iUser.email,
            null
          )
        );
      }
    );
  }
}
