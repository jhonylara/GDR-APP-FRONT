import { Requisito } from './requisito';
import { Integrante } from './integrante';

export class Atividade {
  private _idAtividade: number;
  private _nome: string;
  private _descricao: string;
  private _status: string;
  private _dataInicio: string;
  private _dataFim: string;
  private _dataConclusao: string;
  private _requisito: Requisito;
  private _criador: Integrante;
  private _desenvolvedor: Integrante;

  constructor(
    id: number,
    nome: string,
    descricao: string,
    status: string,
    dataInicio: string,
    dataFim: string,
    dataConclusao: string,
    requisito: Requisito,
    criador: Integrante,
    desenvolvedor: Integrante
  ) {
    this.idAtividade = id;
    this.nome = nome;
    this.descricao = descricao;
    this.status = status;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.dataConclusao = dataConclusao;
    this.requisito = requisito;
    this.criador = criador;
    this.desenvolvedor = desenvolvedor;
  }

  public get idAtividade(): number {
    return this._idAtividade;
  }

  public set idAtividade(id: number) {
    this._idAtividade = id;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public set descricao(descricao: string) {
    this._descricao = descricao;
  }


  public get status(): string {
    return this._status;
  }

  public set status(status: string) {
    this._status = status;
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


  public get dataConclusao(): string {
    return this._dataConclusao;
  }

  public set dataConclusao(dataConclusao: string) {
    this._dataConclusao = dataConclusao;
  }

  public get requisito(): Requisito {
    return this._requisito;
  }

  public set requisito(requisito: Requisito) {
    this._requisito = requisito;
  }

  public get criador(): Integrante {
    return this._criador;
  }

  public set criador(criador: Integrante) {
    this._criador = criador;
  }

  public get desenvolvedor(): Integrante {
    return this._desenvolvedor;
  }

  public set desenvolvedor(desenvolvedor: Integrante) {
    this._desenvolvedor = desenvolvedor;
  }
}
