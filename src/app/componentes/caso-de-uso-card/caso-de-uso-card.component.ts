import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CasoDeUso } from '../../models/caso-de-uso';

@Component({
  selector: 'app-caso-de-uso-card',
  templateUrl: './caso-de-uso-card.component.html',
  styleUrls: ['./caso-de-uso-card.component.css']
})
export class CasoDeUsoCardComponent implements OnChanges {
  @Input()
  public edit: boolean;
  @Input()
  public casoDeUso: CasoDeUso;
  protected casoDeUsoAux: CasoDeUso;
  protected casoDeUsoForm: FormGroup;
  protected nivel: any;
  protected nivelSelecionado: string;

  constructor(private fb: FormBuilder) {
    this.nivel = [
      { label: 'Selecione', value: null },
      { label: 'Essencial', value: 'Essencial' },
      { label: 'Muito', value: 'Muito' },
      { label: 'Médio', value: 'Medio' },
      { label: 'Pouco', value: 'Pouco' },
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['casoDeUso'] && changes['casoDeUso'].currentValue) {
      this.initCasoDeUso();
      this.initForm();
    }
  }

  /**
   * Clona caso de uso original e passa para o formulario.
   */
  initCasoDeUso(): void {
    this.casoDeUsoAux = new CasoDeUso(
      this.casoDeUso.idCasoDeUso,
      this.casoDeUso.nome,
      this.casoDeUso.escopo,
      this.casoDeUso.nivel,
      this.casoDeUso.atorPrincipal,
      this.casoDeUso.preCondicao,
      this.casoDeUso.posCondicao,
      this.casoDeUso.cenarioPrincipal,
      this.casoDeUso.extensao,
    );
  }

  /**
   * Inicia formulario.
   */
  initForm(): void {
    this.casoDeUsoForm = this.fb.group({
      nome: [this.casoDeUsoAux.nome, [Validators.required]],
      escopo: [this.casoDeUsoAux.escopo, [Validators.required]],
      nivel: [this.casoDeUsoAux.nivel, [Validators.required]],
      atorPrincipal: [this.casoDeUsoAux.atorPrincipal, [Validators.required]],
      preCondicao: [this.casoDeUsoAux.preCondicao, [Validators.required]],
      posCondicao: [this.casoDeUsoAux.posCondicao, [Validators.required]],
      cenarioPrincipal: [this.casoDeUsoAux.cenarioPrincipal, [Validators.required]],
      extensao: [this.casoDeUsoAux.extensao, [Validators.required]],
    });
  }

  /**
   * Caso de uso passado do componente de novo caso de uso recebe os dados do formulario.
   */
  salvarDados(): void {
    this.casoDeUso.nome = this.casoDeUsoForm.get('nome').value;
    this.casoDeUso.escopo = this.casoDeUsoForm.get('escopo').value;
    this.casoDeUso.nivel = this.casoDeUsoForm.get('nivel').value;
    this.casoDeUso.atorPrincipal = this.casoDeUsoForm.get('atorPrincipal').value;
    this.casoDeUso.preCondicao = this.casoDeUsoForm.get('preCondicao').value;
    this.casoDeUso.posCondicao = this.casoDeUsoForm.get('posCondicao').value;
    this.casoDeUso.cenarioPrincipal = this.casoDeUsoForm.get('cenarioPrincipal').value;
    this.casoDeUso.extensao = this.casoDeUsoForm.get('extensao').value;
  }

}
