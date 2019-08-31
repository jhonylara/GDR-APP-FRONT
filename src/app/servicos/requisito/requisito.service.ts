import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { ProjetoService } from '../projeto/projeto.service';
import { Projeto } from '../../models/projeto';
import { Requisito } from '../../models/requisito';
import { IRequisito } from '../../interfaces/requisito.interface';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { URLSERVER } from '../../../environments/environment';
import { Integrante } from '../../models/integrante';
import { IIntegrante } from '../../interfaces/integrante.inteface';

@Injectable({
  providedIn: 'root'
})
export class RequisitoService {
  public static requisitoSelecionado = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  /**
   * Busca todos os requisitos.
   */
  getRequisitos(): Observable<Requisito[]> {
    return this.http.get<IRequisito[]>(
      `${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/requisito/list`
    ).map(
      (iRequisitos: IRequisito[]) => {
        return iRequisitos.map(
          (iReq: IRequisito) => new Requisito(
            iReq.id,
            iReq.idRequisito,
            iReq.nome,
            iReq.descricao,
            iReq.importancia,
            iReq.fonte,
            iReq.categoria,
            null,
            null
          )
        );
      }
    );
  }

  /**
   * Busca um requisito em específico através do id.
   *
   * @param id - id do requisito.
   */
  getRequisito(id: number): Observable<Requisito> {
    return this.http.get<IRequisito>(
      `${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/requisito/${id}`
    ).map(
      (iReq: IRequisito) => new Requisito(
        iReq.id,
        iReq.idRequisito,
        iReq.nome,
        iReq.descricao,
        iReq.importancia,
        iReq.fonte,
        iReq.categoria,
        null,
        null
      )
    );
  }

  /**
   * Método para adicionar um requisito.
   *
   * @param requisito - requisito a ser adicionado.
   */
  addRequisito(requisito: Requisito): Observable<IRequisito> {
    const iRequisito = {
      idRequisito: requisito.idRequisito,
      nome: requisito.nome,
      descricao: requisito.descricao,
      importancia: requisito.importancia,
      fonte: requisito.fonte,
      categoria: requisito.categoria
    };

    return this.http.post<IRequisito>(`${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/requisito`, iRequisito);
  }

  /**
   * Método para editar um requisito através da requisição PUT.
   *
   * @param id - id do requisito.
   * @param requisito - requisito com as informações já editadas.
   */
  editRequisito(id: number, requisito: Requisito): Observable<IRequisito> {
    const iRequisito = {
      idRequisito: requisito.idRequisito,
      nome: requisito.nome,
      descricao: requisito.descricao,
      importancia: requisito.importancia,
      fonte: requisito.fonte,
      categoria: requisito.categoria
    };

    return this.http.put<IRequisito>(`${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/requisito/${id}`, iRequisito);
  }

  /**
   * Método que deletará o requisito através da requisição DELETE passando id.
   *
   * @param id - id do requisito a ser deletado.
   */
  deleteRequisito(id: number): Observable<any> {
    return this.http.delete<any>(`${URLSERVER}/${localStorage['id']}/projeto/${localStorage['projetoId']}/requisito/${id}`);
  }
}
