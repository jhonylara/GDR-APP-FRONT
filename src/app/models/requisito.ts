import { Integrante } from './integrante';
import { Projeto } from './projeto';

export class Requisito {
  private _id: number;
  private _idRequisito: string;
  private _nome: string;
  private _descricao: string;
  private _importancia: string;
  private _fonte: string;
  private _categoria: string;
  private _integrante: Integrante;
  private _projeto: Projeto;

  constructor(
    id: number,
    idRequisito: string,
    nome: string,
    descricao: string,
    importancia: string,
    fonte: string,
    categoria: string,
    integrante: Integrante,
    projeto: Projeto
  ) {
    this.id = id;
    this.idRequisito = idRequisito;
    this.nome = nome;
    this.descricao = descricao;
    this.importancia = importancia;
    this.fonte = fonte;
    this.categoria = categoria;
    this.integrante = integrante;
    this.projeto = projeto;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get idRequisito(): string {
    return this._idRequisito;
  }

  public set idRequisito(idRequisito: string) {
    this._idRequisito = idRequisito;
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

  public get importancia(): string {
    return this._importancia;
  }

  public set importancia(importancia: string) {
    this._importancia = importancia;
  }

  public get fonte(): string {
    return this._fonte;
  }

  public set fonte(fonte: string) {
    this._fonte = fonte;
  }

  public get categoria(): string {
    return this._categoria;
  }

  public set categoria(categoria: string) {
    this._categoria = categoria;
  }

  public get integrante(): Integrante {
    return this._integrante;
  }

  public set integrante(integrante: Integrante) {
    this._integrante = integrante;
  }

  public get projeto(): Projeto {
    return this._projeto;
  }

  public set projeto(projeto: Projeto) {
    this._projeto = projeto;
  }
}
