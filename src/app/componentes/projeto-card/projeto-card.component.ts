import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Projeto } from '../../models/projeto';

@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.component.html',
  styleUrls: ['./projeto-card.component.css']
})
export class ProjetoCardComponent implements OnChanges {
  @Input()
  public edit: boolean;
  @Input()
  public projeto: Projeto;
  protected projetoAux: Projeto;
  protected projetoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['projeto'] && changes['projeto'].currentValue) {
      this.initProjeto();
      this.initForm();
    }
  }

  /**
   * Método para iniciar o formulário.
   */
  initForm(): void {
    let dataInicio;
    !this.projetoAux.dataInicio ? dataInicio = null : dataInicio = this.projetoAux.dataInicio;

    let dataFim;
    !this.projetoAux.dataFim ? dataFim = null : dataFim = this.projetoAux.dataFim;

    this.projetoForm = this.fb.group({
      nome: [this.projetoAux.nome, [Validators.required, Validators.minLength(3)]],
      dataInicio: [dataInicio, [Validators.required]],
      dataFim: [dataFim, [Validators.required]]
    });
  }

  /**
   * Salva os dados do formulário no objeto.
   */
  salvarDados(): void {
    this.projeto.nome = this.projetoForm.get('nome').value;
    this.projeto.dataInicio = this.projetoForm.get('dataInicio').value;
    this.projeto.dataFim = this.projetoForm.get('dataFim').value;
  }

  /**
   * Clona o objeto, e passa o objeto auxiliar para o formulário.
   */
  initProjeto(): void {
    this.projetoAux = new Projeto(
      this.projeto.idProjeto,
      this.projeto.nome,
      this.projeto.dataInicio,
      this.projeto.dataFim,
      this.projeto.requisitos,
      this.projeto.atividades,
      this.projeto.integrantes
    );
  }

}
