export class CasoDeUso {
  private _id: number;
  private _nome: string;
  private _escopo: string;
  private _nivel: string;
  private _atorPrincipal: string;
  private _preCondicao: string;
  private _posCondicao: string;
  private _cenarioPrincipal: string;
  private _extensao: string;

  constructor(
    id: number,
    nome: string,
    escopo: string,
    nivel: string,
    atorPrincipal: string,
    preCondicao: string,
    posCondicao: string,
    cenarioPrincipal: string,
    extensao: string,
  ) {
    this.idCasoDeUso = id;
    this.nome = nome;
    this.escopo = escopo;
    this.nivel = nivel;
    this.atorPrincipal = atorPrincipal;
    this.preCondicao = preCondicao;
    this.posCondicao = posCondicao;
    this.cenarioPrincipal = cenarioPrincipal;
    this.extensao = extensao;
  }

  public get idCasoDeUso(): number {
    return this._id;
  }

  public set idCasoDeUso(id: number) {
    this._id = id;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get escopo(): string {
    return this._escopo;
  }

  public set escopo(escopo: string) {
    this._escopo = escopo;
  }

  public get nivel(): string {
    return this._nivel;
  }

  public set nivel(nivel: string) {
    this._nivel = nivel;
  }

  public get atorPrincipal(): string {
    return this._atorPrincipal;
  }

  public set atorPrincipal(atorPrincipal: string) {
    this._atorPrincipal = atorPrincipal;
  }

  public get preCondicao(): string {
    return this._preCondicao;
  }

  public set preCondicao(preCondicoes: string) {
    this._preCondicao = preCondicoes;
  }

  public get posCondicao(): string {
    return this._posCondicao;
  }

  public set posCondicao(posCondicoes: string) {
    this._posCondicao = posCondicoes;
  }

  public get cenarioPrincipal(): string {
    return this._cenarioPrincipal;
  }

  public set cenarioPrincipal(cenarioPrincipal: string) {
    this._cenarioPrincipal = cenarioPrincipal;
  }

  public get extensao(): string {
    return this._extensao;
  }

  public set extensao(extensao: string) {
    this._extensao = extensao;
  }
}
