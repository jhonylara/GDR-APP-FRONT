import { IProjeto } from './projeto.interface';
import { IIntegrante } from './integrante.inteface';

export interface IRequisito {
  id: number;
  idRequisito: string;
  nome: string;
  descricao: string;
  importancia: string;
  fonte: string;
  categoria: string;
  idUsuario: number;
  integrante: IIntegrante;
  projeto: IProjeto;
}
