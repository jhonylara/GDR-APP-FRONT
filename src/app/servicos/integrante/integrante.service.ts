import { IIntegrante } from './../../interfaces/integrante.inteface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { URLSERVER } from '../../../environments/environment';
import { Integrante } from '../../models/integrante';

@Injectable({
  providedIn: 'root'
})
export class IntegranteService {
  constructor(private http: HttpClient) { }

  getIntegrantes(): Observable<any> {
    return this.http.get(`${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/integrante/list`).map(
      (iIntegrantes) => {
        return iIntegrantes;
      }
    );
  }

  getIntegrante(id: number): Observable<Integrante> {
    return this.http.get(`${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/integrante/${id}`).map(
      (iIntegrante: IIntegrante) => {
        return new Integrante(
          iIntegrante.id,
          iIntegrante.nome,
          iIntegrante.perfilIntegrante,
          null
        );
      }
    );
  }

  addIntegrante(integrante: Integrante, idUsuario: number): Observable<IIntegrante> {
    const iIntegrante = {
      perfilIntegrante: integrante.perfil
    };

    return this.http.post<IIntegrante>(`${URLSERVER}/${idUsuario}/projeto/${localStorage['projetoId']}/integrante`, iIntegrante);
  }

  editIntegrante(id: number, integrante: Integrante): Observable<IIntegrante> {
    const iIntegrante = {
      perfilIntegrante: integrante.perfil
    };

    return this.http.post<IIntegrante>(
      `${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/integrante/${id}`, iIntegrante
    );
  }

  deleteIntegrante(id: number): Observable<any> {
    return this.http.delete<any>(`${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/integrante/${id}`);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
