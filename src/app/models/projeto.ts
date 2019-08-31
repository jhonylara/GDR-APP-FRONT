import { Atividade } from './atividade';
import { Requisito } from './requisito';
import { Integrante } from './integrante';

export class Projeto {
  private _id: number;
  private _nome: string;
  private _dataInicio: string;
  private _dataFim: string;
  private _requisitos: Requisito[];
  private _atividades: Atividade[];
  private _integrantes: Integrante[];

  constructor(
    id: number,
    nome: string,
    dataInicio: string,
    dataFim: string,
    requisitos: Requisito[],
    atividades: Atividade[],
    integrantes: Integrante[]
  ) {
    this.idProjeto = id;
    this.nome = nome;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.requisitos = requisitos;
    this.atividades = atividades;
    this.integrantes = integrantes;
  }

  public get idProjeto(): number {
    return this._id;
  }

  public set idProjeto(idProjeto: number) {
    this._id = idProjeto;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get dataInicio(): string {
    return this._dataInicio;
  }

  public set dataInicio(dataInicio: string) {
    this._dataInicio = dataInicio;
  }

  public get dataFim(): string {
    return this._dataFim;
  }

  public set dataFim(dataFim: string) {
    this._dataFim = dataFim;
  }

  public get requisitos(): any[] {
    return this._requisitos;
  }

  public set requisitos(requisitos: any[]) {
    this._requisitos = requisitos;
  }

  public get atividades(): any[] {
    return this._atividades;
  }

  public set atividades(casosDeUso: any[]) {
    this._atividades = casosDeUso;
  }

  public get integrantes(): any[] {
    return this._integrantes;
  }

  public set integrantes(integrantes: any[]) {
    this._integrantes = integrantes;
  }
}
