import { IRequisito } from './requisito.interface';
import { IIntegrante } from './integrante.inteface';

export interface IAtividade {
  id: number;
  nome: string;
  descricao: string;
  status: string;
  dataInicio: string;
  dataFim: string;
  dataConclusao: string;
  requisito: IRequisito;
  criador: IIntegrante;
  desenvolvedor: IIntegrante;
  desenvolvedores: IIntegrante[];
}
