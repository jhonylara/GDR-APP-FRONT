import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor (private http: UsuarioService) {}
  /**
   * Método que intercepta a requisição e coloca o token no headers da requisição.
   *
   * @param req - requisição HTTP (GET, POST, PUT, DELETE)
   * @param next - tratamento.
   */
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage['token'];
    if (token) {
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    }
    return next.handle(req).do((event: HttpEvent<any>) => {},
     (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.http.logout();
          UsuarioService.msgErro.next('Token invalido - 401');
        }
        if (err.status === 400) {
          UsuarioService.msgErro.next('Erro requisição - 400');
        }
        if (err.status === 404) {
          UsuarioService.msgErro.next('Não encontrado - 404');
        }
      }
    });
  }
}
