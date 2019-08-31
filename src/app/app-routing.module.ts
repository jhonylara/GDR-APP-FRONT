import { DetalheAtividadeComponent } from './componentes/detalhe-atividade/detalhe-atividade.component';
import { DetalheIntegranteComponent } from './componentes/detalhe-integrante/detalhe-integrante.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NovoRequisitoComponent } from './componentes/novo-requisito/novo-requisito.component';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RequisitoComponent } from './componentes/requisito/requisito.component';
import { CasosDeUsoComponent } from './componentes/casos-de-uso/casos-de-uso.component';
import { AtividadesComponent } from './componentes/atividades/atividades.component';
import { LoginGuard } from './servicos/guard/login.guard';
import { NovoProjetoComponent } from './componentes/novo-projeto/novo-projeto.component';
import { DetalheProjetoComponent } from './componentes/detalhe-projeto/detalhe-projeto.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { NovoCasoDeUsoComponent } from './componentes/novo-caso-de-uso/novo-caso-de-uso.component';
import { DetalheCasoDeUsoComponent } from './componentes/detalhe-caso-de-uso/detalhe-caso-de-uso.component';
import { DetalheRequisitoComponent } from './componentes/detalhe-requisito/detalhe-requisito.component';
import { NovaAtividadeComponent } from './componentes/nova-atividade/nova-atividade.component';
import { NovoIntegranteComponent } from './componentes/novo-integrante/novo-integrante.component';
import { TrocaSenhaComponent } from './componentes/troca-senha/troca-senha.component';
import { ValidarCodigoComponent } from './componentes/validar-codigo/validar-codigo.component';
import { IntegrantesComponent } from './componentes/integrantes/integrantes.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'trocar-senha', component: ValidarCodigoComponent },
  { path: 'trocar-senha/:codigo', component: TrocaSenhaComponent },
  { path: 'projeto', component: ProjetosComponent, canActivate: [LoginGuard] },
  { path: ':idProjeto/inicio', component: InicioComponent, canActivate: [LoginGuard] },
  { path: ':idProjeto/requisitos', component: RequisitoComponent, canActivate: [LoginGuard] },
  { path: ':idProjeto/casos-de-uso', component: CasosDeUsoComponent, canActivate: [LoginGuard] },
  { path: ':idProjeto/atividades', component: AtividadesComponent, canActivate: [LoginGuard] },
  { path: ':idProjeto/integrantes', component: IntegrantesComponent, canActivate: [LoginGuard] },
  { path: 'not-found', component: NotFoundComponent, canActivate: [LoginGuard] },
  { path: ':idProjeto/detalhe-projeto', component: DetalheProjetoComponent, canActivate: [LoginGuard] },
  { path: ':idRequisito/detalhe-requisito', component: DetalheRequisitoComponent, canActivate: [LoginGuard] },
  { path: ':idCasoDeUso/detalhe-caso-de-uso', component: DetalheCasoDeUsoComponent, canActivate: [LoginGuard] },
  { path: ':idIntegrante/detalhe-integrante', component: DetalheIntegranteComponent, canActivate: [LoginGuard] },
  { path: ':idAtividade/detalhe-atividade', component: DetalheAtividadeComponent, canActivate: [LoginGuard] },
  { path: 'nova-atividade', component: NovaAtividadeComponent, canActivate: [LoginGuard] },
  { path: 'novo-integrante', component: NovoIntegranteComponent, canActivate: [LoginGuard] },
  { path: 'novo-projeto', component: NovoProjetoComponent, canActivate: [LoginGuard] },
  { path: 'novo-requisito', component: NovoRequisitoComponent, canActivate: [LoginGuard] },
  { path: 'novo-caso-de-uso', component: NovoCasoDeUsoComponent, canActivate: [LoginGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

