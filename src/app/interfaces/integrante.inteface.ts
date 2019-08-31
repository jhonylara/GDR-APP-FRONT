import { IProjeto } from './projeto.interface';

export interface IIntegrante {
  id: number;
  nome: string;
  perfilIntegrante: string;
  projetos: IProjeto[];
}
