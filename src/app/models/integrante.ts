import { Projeto } from './projeto';

export class Integrante {
  private _id: number;
  private _nome: string;
  private _perfil: string;
  private _projetos: Projeto[];

  constructor(
    id: number,
    nome: string,
    perfil: string,
    projetos: Projeto[]
  ) {
    this.id = id;
    this.nome = nome;
    this.perfil = perfil;
    this.projetos = projetos;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get perfil(): string {
    return this._perfil;
  }

  public set perfil(perfil: string) {
    this._perfil = perfil;
  }

  public get projetos(): Projeto[] {
    return this._projetos;
  }

  public set projetos(projetos: Projeto[]) {
    this._projetos = projetos;
  }
}
