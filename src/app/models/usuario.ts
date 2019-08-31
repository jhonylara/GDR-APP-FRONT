export class Usuario {
  private _id: number;
  private _nome: string;
  private _email: string;
  private _senha: string;

  constructor(
    id: number,
    nome: string,
    email: string,
    senha: string
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
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

  public set nome(id: string) {
    this._nome = id;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get senha(): string {
    return this._senha;
  }

  public set senha(senha: string) {
    this._senha = senha;
  }
}
