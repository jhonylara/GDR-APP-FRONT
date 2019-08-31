import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { GrowlModule } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/api';
import { BlockUIModule } from 'primeng/blockui';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/components/table/table';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RequisitoComponent } from './componentes/requisito/requisito.component';
import { CasosDeUsoComponent } from './componentes/casos-de-uso/casos-de-uso.component';
import { AtividadesComponent } from './componentes/atividades/atividades.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { LogErroComponent } from './componentes/log-erro/log-erro.component';
import { MenuUsuarioComponent } from './componentes/menu-usuario/menu-usuario.component';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { NovoProjetoComponent } from './componentes/novo-projeto/novo-projeto.component';
import { ProjetoCardComponent } from './componentes/projeto-card/projeto-card.component';
import { DetalheProjetoComponent } from './componentes/detalhe-projeto/detalhe-projeto.component';
import { NovoRequisitoComponent } from './componentes/novo-requisito/novo-requisito.component';
import { RequisitoCardComponent } from './componentes/requisito-card/requisito-card.component';
import { DetalheRequisitoComponent } from './componentes/detalhe-requisito/detalhe-requisito.component';
import { NovoCasoDeUsoComponent } from './componentes/novo-caso-de-uso/novo-caso-de-uso.component';
import { CasoDeUsoCardComponent } from './componentes/caso-de-uso-card/caso-de-uso-card.component';
import { DetalheCasoDeUsoComponent } from './componentes/detalhe-caso-de-uso/detalhe-caso-de-uso.component';
import { LoginGuard } from './servicos/guard/login.guard';
import { routing } from './app-routing.module';
import { Interceptor } from './servicos/Interceptor/interceptor.service';
import { NovaAtividadeComponent } from './componentes/nova-atividade/nova-atividade.component';
import { AtividadeCardComponent } from './componentes/atividade-card/atividade-card.component';
import { NovoIntegranteComponent } from './componentes/novo-integrante/novo-integrante.component';
import { IntegranteCardComponent } from './componentes/integrante-card/integrante-card.component';
import { TrocaSenhaComponent } from './componentes/troca-senha/troca-senha.component';
import { EsqueceuSenhaComponent } from './componentes/esqueceu-senha/esqueceu-senha.component';
import { ValidarCodigoComponent } from './componentes/validar-codigo/validar-codigo.component';
import { IntegrantesComponent } from './componentes/integrantes/integrantes.component';
import { DetalheIntegranteComponent } from './componentes/detalhe-integrante/detalhe-integrante.component';
import { DetalheAtividadeComponent } from './componentes/detalhe-atividade/detalhe-atividade.component';
import { NumberDirective } from './number.directive';

@NgModule({
  declarations: [
    AtividadeCardComponent,
    NovaAtividadeComponent,
    AppComponent,
    NavbarComponent,
    LoginComponent,
    InicioComponent,
    RequisitoComponent,
    CasosDeUsoComponent,
    AtividadesComponent,
    CadastroComponent,
    LogErroComponent,
    MenuUsuarioComponent,
    ProjetosComponent,
    NotFoundComponent,
    NovoProjetoComponent,
    ProjetoCardComponent,
    DetalheProjetoComponent,
    NovoRequisitoComponent,
    RequisitoCardComponent,
    DetalheRequisitoComponent,
    NovoCasoDeUsoComponent,
    CasoDeUsoCardComponent,
    DetalheCasoDeUsoComponent,
    NovoIntegranteComponent,
    IntegranteCardComponent,
    TrocaSenhaComponent,
    EsqueceuSenhaComponent,
    ValidarCodigoComponent,
    IntegrantesComponent,
    DetalheIntegranteComponent,
    DetalheAtividadeComponent,
    NumberDirective
  ],
  imports: [
    DropdownModule,
    TooltipModule,
    CalendarModule,
    ConfirmDialogModule,
    GrowlModule,
    BlockUIModule,
    InputTextareaModule,
    TableModule,
    PasswordModule,
    BrowserAnimationsModule,
    DialogModule,
    MessageModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    ButtonModule,
    CardModule,
    InputTextModule,
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
    ConfirmationService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
