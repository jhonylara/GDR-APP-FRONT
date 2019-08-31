import { IRequisito } from './requisito.interface';
import { IIntegrante } from './integrante.inteface';
import { IAtividade } from './atividade.interface';

export interface IProjeto {
  id: number;
  nome: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  perfilIntegranteProjeto: string;
  requisitos: IRequisito[];
  atividades: IAtividade[];
  integrantes: IIntegrante[];
}
