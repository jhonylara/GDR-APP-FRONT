import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ICasoDeUso } from '../../interfaces/casoDeUso.interface';
import { CasoDeUso } from '../../models/caso-de-uso';
import { URLSERVER } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CasoDeUsoService {
  constructor(private http: HttpClient) { }

  /**
   * Busca os casos de uso do servidor.
   */
  getCasosDeUso(): Observable<CasoDeUso[]> {
    const idProjeto = localStorage['projetoId'];
    return this.http.get<ICasoDeUso[]>(
      `${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/casoDeUso/list`
    ).map(
      (iCasosDeUsos: ICasoDeUso[]) => {
        const casosDeUso: CasoDeUso[] = iCasosDeUsos.map(
          (iCasosUso: ICasoDeUso) => new CasoDeUso(
            iCasosUso.id,
            iCasosUso.nome,
            iCasosUso.escopo,
            iCasosUso.nivel,
            iCasosUso.atorPrincipal,
            iCasosUso.preCondicao,
            iCasosUso.posCondicao,
            iCasosUso.cenarioPrincipal,
            iCasosUso.extensao
          )
        );
        return casosDeUso;
      }
    );
  }

  /**
   * Busca um caso de uso através do id.
   *
   * @param id - id do caso de uso.
   */
  getCasoDeUso(id: number): Observable<CasoDeUso> {
    return this.http.get<ICasoDeUso>(
      `${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/casoDeUso/${id}`
    ).map(
      (iCasoDeUso: ICasoDeUso) => {
        return new CasoDeUso(
          iCasoDeUso.id,
          iCasoDeUso.nome,
          iCasoDeUso.escopo,
          iCasoDeUso.nivel,
          iCasoDeUso.atorPrincipal,
          iCasoDeUso.preCondicao,
          iCasoDeUso.posCondicao,
          iCasoDeUso.cenarioPrincipal,
          iCasoDeUso.extensao,
        );
      }
    );
  }

  /**
   * Método para adicionar um caso de uso.
   *
   * @param casoDeUso - caso de uso a ser adicionado.
   */
  addCasoDeUso(casoDeUso: CasoDeUso): Observable<ICasoDeUso> {
    const iCasoDeUso = {
      'nome': casoDeUso.nome,
      'escopo': casoDeUso.escopo,
      'nivel': casoDeUso.nivel,
      'preCondicao': casoDeUso.preCondicao,
      'posCondicao': casoDeUso.posCondicao,
      'cenarioPrincipal': casoDeUso.cenarioPrincipal,
      'extensao': casoDeUso.extensao,
      'atorPrincipal': casoDeUso.atorPrincipal
    };

    return this.http.post<ICasoDeUso>(`${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/casoDeUso/`, iCasoDeUso);
  }


  /**
   * Método para editar um caso de uso através da requisição PUT.
   *
   * @param id - id do caso de uso.
   * @param casoDeUso - objeto caso de uso com as informacoes ja editadas.
   */
  editCasoDeUso(id: number, casoDeUso: CasoDeUso): Observable<boolean> {
    const iCasoDeUso = {
      'nome': casoDeUso.nome,
      'escopo': casoDeUso.escopo,
      'nivel': casoDeUso.nivel,
      'preCondicao': casoDeUso.preCondicao,
      'posCondicao': casoDeUso.posCondicao,
      'cenarioPrincipal': casoDeUso.cenarioPrincipal,
      'extensao': casoDeUso.extensao,
      'atorPrincipal': casoDeUso.atorPrincipal
    };

    return this.http.put<boolean>(`${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/casoDeUso/${id}`, iCasoDeUso);
  }

  /**
   * Método que deletará o caso de uso através da requisição DELETE passando id.
   *
   * @param id - id do caso de uso que sera deletado.
   */
  deleteCasoDeUso(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/casoDeUso/${id}`);
  }
}
