import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Atividade } from '../../models/atividade';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Requisito } from '../../models/requisito';
import { Integrante } from '../../models/integrante';
import { RequisitoService } from '../../servicos/requisito/requisito.service';
import { Observable } from 'rxjs';
import { IntegranteService } from '../../servicos/integrante/integrante.service';

@Component({
  selector: 'app-atividade-card',
  templateUrl: './atividade-card.component.html',
  styleUrls: ['./atividade-card.component.css']
})
export class AtividadeCardComponent implements OnInit, OnChanges {
  @Input()
  public edit: boolean;
  @Input()
  public atividade: Atividade;
  @Input()
  public novo: boolean;

  protected atividadeAux: Atividade;
  protected atividadeForm: FormGroup;

  protected status: any;
  protected statusSelecionado: string;

  protected requisitos: any[];
  protected requisitoSelecionado: Requisito;

  protected desenvolvedores: any;
  protected desenvolvedorSelecionado: Integrante;

  constructor(private fb: FormBuilder, private requisitoService: RequisitoService, private integranteService: IntegranteService) { }

  ngOnInit() {
    this.status = [
      { label: 'Selecione', value: null },
      { label: 'Iniciar', value: 'Ha iniciar' },
      { label: 'Desenvolvendo', value: 'Desenvolvendo' },
      { label: 'Testando', value: 'Testando' },
      { label: 'Parado', value: 'Parado' },
      { label: 'Concluido', value: 'Concluido' },
    ];

    this.requisitoService.getRequisitos().subscribe(
      (requisitos: Requisito[]) => {
        this.requisitos = [];

        if (requisitos.length > 0) {
          requisitos.forEach((requisito: Requisito) => {
            this.requisitos.push({ label: `${requisito.nome}`, value: requisito });
          });

          this.requisitos.unshift({ label: 'Selecione', value: null });
        }
      });

    this.integranteService.getIntegrantes().subscribe(
      (integrantes: Integrante[]) => {
        this.desenvolvedores = [];

        if (integrantes.length > 0) {
          integrantes.forEach((integrante: Integrante) => {
            this.desenvolvedores.push({ label: `${integrante.nome}`, value: integrante });
          });

          this.desenvolvedores.unshift({ label: 'Selecione', value: null });
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['atividade'] && changes['atividade'].currentValue) {
      this.initAtividade();
      this.initForm();
    }
  }

  /**
   * Clona atividade original e passa para o formulario.
   */
  initAtividade(): void {
    this.atividadeAux = new Atividade(
      this.atividade.idAtividade,
      this.atividade.nome,
      this.atividade.descricao,
      this.atividade.status,
      this.atividade.dataInicio,
      this.atividade.dataFim,
      this.atividade.dataConclusao,
      this.atividade.requisito,
      this.atividade.criador,
      this.atividade.desenvolvedor,
    );
  }

  /**
   * Inicia formulario.
   */
  initForm(): void {
    this.atividadeForm = this.fb.group({
      nome: [this.atividadeAux.nome, [Validators.required]],
      descricao: [this.atividadeAux.descricao, [Validators.required]],
      status: [this.atividadeAux.status, [Validators.required]],
      dataInicio: [this.atividadeAux.dataInicio, [Validators.required]],
      dataFim: [this.atividadeAux.dataFim, [Validators.required]],
      dataConclusao: [this.atividadeAux.dataConclusao],
      requisito: [this.atividadeAux.requisito, [Validators.required]],
      desenvolvedor: [this.atividadeAux.desenvolvedor, [Validators.required]]
    });

    this.atividadeForm.get('status').valueChanges.subscribe((value: string) => {
      if (this.novo) {
        this.status.forEach(s => {
          if (s.value === 'Concluido') {
            const index = this.status.indexOf(s);
            if (index > -1) {
              this.status.splice(index, 1);
            }
          }
        });
      }
      if (value === 'Concluido') {
        this.atividadeForm.get('dataConclusao').setErrors({ 'required': true });
      } else {
        this.atividadeForm.get('dataConclusao').setErrors(null);
      }
    });

    if (!this.novo) {
      this.atividadeForm.get('requisito').setErrors(null);
      this.atividadeForm.get('desenvolvedor').setErrors(null);
    }
  }

  /**
   * Atividade passada do componente recebe os dados editados pelo formulario.
   */
  salvarDados(): void {
    this.atividade.nome = this.atividadeForm.get('nome').value;
    this.atividade.descricao = this.atividadeForm.get('descricao').value;
    this.atividade.status = this.atividadeForm.get('status').value;
    this.atividade.dataInicio = this.atividadeForm.get('dataInicio').value;
    this.atividade.dataFim = this.atividadeForm.get('dataFim').value;
    this.atividade.requisito = this.atividadeForm.get('requisito').value;
    this.atividade.desenvolvedor = this.atividadeForm.get('desenvolvedor').value;
  }
}
