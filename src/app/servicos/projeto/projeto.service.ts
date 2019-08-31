import { IIntegrante } from './../../interfaces/integrante.inteface';
import { IRequisito } from './../../interfaces/requisito.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { URLSERVER } from '../../../environments/environment';
import { IProjeto } from '../../interfaces/projeto.interface';
import { Projeto } from '../../models/projeto';
import { Requisito } from '../../models/requisito';
import { Integrante } from '../../models/integrante';
import { IAtividade } from '../../interfaces/atividade.interface';
import { Atividade } from '../../models/atividade';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  public static projetoSelecionado = new ReplaySubject<number>(1);
  public static projeto = new ReplaySubject<Projeto>(1);
  private subProjsResultado: Subject<Projeto[]> = new Subject<Projeto[]>();

  constructor(private http: HttpClient) { }

  /**
   * Busca os projeto para listar.
   */
  getProjetos(): Observable<Projeto[]> {
    return this.http
      .get<any>(`${URLSERVER}/${localStorage['id']}/projeto/list`)
      .map((iProjetos: IProjeto[]) => {
        return iProjetos.map(
          (iProjeto: IProjeto) => {
            return new Projeto(
              iProjeto.id,
              iProjeto.nome,
              iProjeto.dataInicio,
              iProjeto.dataFim,
              null,
              null,
              null
            );
          }
        );
      }).do((projs: Projeto[]) => this.subProjsResultado.next(projs));
  }

  /**
   * Carrega um projeto através do id determinado.
   *
   * @param id - id do projeto.
   */
  getProjeto(id: number): Observable<Projeto> {
    return this.http.get<IProjeto>(`${URLSERVER}/${localStorage['id']}/projeto/${id}`).map(
      (iProjeto: IProjeto) => {
        return this.mapInterfaceToModelProjeto(iProjeto, id);
      }).do((proj: Projeto) => ProjetoService.projeto.next(proj));
  }

  /**
   * Adiciona um projeto através da requisição POST.
   *
   * @param projeto - projeto a ser adicionado.
   */
  addProjeto(projeto: Projeto): Observable<IProjeto> {
    const iProjeto = {
      nome: projeto.nome,
      dataInicio: new Date(projeto.dataInicio).toLocaleDateString(),
      dataFim: new Date(projeto.dataFim).toLocaleDateString(),
    };

    return this.http.post<IProjeto>(`${URLSERVER}/${localStorage['id']}/projeto`, iProjeto);
  }

  /**
   * Método para editar projeto através da requisição PUT.
   * Passa id do projeto que será editado e o objeto projeto com as informações editadas.
   *
   * @param id - id do projeto.
   * @param projeto - objeto projeto com as informações editadas.
   */
  editProjeto(id: number, projeto: Projeto): Observable<boolean> {
    const iProjeto = {
      nome: projeto.nome,
      dataInicio: projeto.dataInicio,
      dataFim: projeto.dataFim,
    };

    return this.http.put<boolean>(`projetos/${id}`, iProjeto);
  }

  /**
   * Método para deletar projeto através da requisição DELETE.
   * Passa id do projeto que será deletado.
   *
   * @param id - id do projeto.
   */
  deleteProjeto(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`projetos/${id}`);
  }

  private mapInterfaceToModelProjeto(iProjeto: IProjeto, id: number) {
    const iReqs = iProjeto.requisitos;
    const iAtvs = iProjeto.atividades;
    const iInts = iProjeto.integrantes;
    const requisitos: Requisito[] = [];
    const atividades: Atividade[] = [];
    const integrantes: Integrante[] = [];

    localStorage.setItem('perfilIntegrante', iProjeto.perfilIntegranteProjeto);

    if (iReqs) {
      iReqs.forEach((iReq: IRequisito) => {
        requisitos.push(
          new Requisito(
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
      });
    }

    if (iInts) {
      iInts.forEach((iInt: IIntegrante) => {
        integrantes.push(
          new Integrante(
            iInt.id,
            iInt.nome,
            iInt.perfilIntegrante,
            null
          )
        );
      });
    }

    if (iAtvs) {
      iAtvs.forEach((iAtv: IAtividade) => {
        atividades.push(
          new Atividade(
            iAtv.id,
            iAtv.nome,
            iAtv.descricao,
            iAtv.status,
            iAtv.dataInicio,
            iAtv.dataFim,
            iAtv.dataConclusao,
            null,
            null,
            null
          )
        );
      });
    }

    return new Projeto(
      id,
      iProjeto.nome,
      iProjeto.dataInicio,
      iProjeto.dataFim,
      requisitos,
      atividades,
      integrantes
    );
  }
}
