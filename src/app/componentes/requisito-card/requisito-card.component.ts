import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Requisito } from '../../models/requisito';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-requisito-card',
  templateUrl: './requisito-card.component.html',
  styleUrls: ['./requisito-card.component.css']
})
export class RequisitoCardComponent implements OnInit, OnChanges {
  @Input()
  public edit: boolean;
  @Input()
  public requisito: Requisito;
  protected requisitoAux: Requisito;
  protected requisitoForm: FormGroup;

  protected importancia: any;
  protected importanciaSelecionada: string;

  protected categoria: any;
  protected categoriaSelecionada: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.importancia = [
      { label: 'Selecione', value: null },
      { label: 'Essencial', value: 'Essencial' },
      { label: 'Importante', value: 'Importante' },
      { label: 'Desejável', value: 'Desejavel' },
    ];

    this.categoria = [
      { label: 'Selecione', value: null },
      { label: 'Funcional', value: 'Funcional' },
      { label: 'Não Funcional', value: 'Nao Funcional' }
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['requisito'] && changes['requisito'].currentValue) {
      this.initRequisito();
      this.initForm();
    }
  }

  /**
   * Clona requisito original e passa para o formulario.
   */
  initRequisito(): void {
    this.requisitoAux = new Requisito(
      this.requisito.id,
      this.requisito.idRequisito,
      this.requisito.nome,
      this.requisito.descricao,
      this.requisito.importancia,
      this.requisito.fonte,
      this.requisito.categoria,
      this.requisito.integrante,
      this.requisito.projeto
    );
  }

  /**
   * Inicia formulario.
   */
  initForm(): void {
    this.requisitoForm = this.fb.group({
      idRequisito: [this.requisitoAux.idRequisito, [Validators.required]],
      nome: [this.requisitoAux.nome, [Validators.required]],
      descricao: [this.requisitoAux.descricao],
      importancia: [this.requisitoAux.importancia, [Validators.required]],
      fonte: [this.requisitoAux.fonte, [Validators.required]],
      categoria: [this.requisitoAux.categoria, [Validators.required]],
    });
  }

  /**
   * Requisito passado do componente de novo requisito recebe os dados do formulario.
   */
  salvarDados(): void {
    this.requisito.idRequisito = this.requisitoForm.get('idRequisito').value;
    this.requisito.nome = this.requisitoForm.get('nome').value;
    this.requisito.descricao = this.requisitoForm.get('descricao').value;
    this.requisito.importancia = this.requisitoForm.get('importancia').value;
    this.requisito.fonte = this.requisitoForm.get('fonte').value;
    this.requisito.categoria = this.requisitoForm.get('categoria').value;
  }

}
