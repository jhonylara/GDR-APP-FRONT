import { IIntegrante } from './integrante.inteface';
export interface ICasoDeUso {
  id: number;
  nome: string;
  escopo: string;
  nivel: string;
  atorPrincipal: string;
  preCondicao: string;
  posCondicao: string;
  cenarioPrincipal: string;
  extensao: string;
  integrante: IIntegrante;
}
