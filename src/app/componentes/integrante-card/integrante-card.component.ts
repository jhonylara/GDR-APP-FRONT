import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Integrante } from '../../models/integrante';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../servicos/usuario/usuario.service';

@Component({
  selector: 'app-integrante-card',
  templateUrl: './integrante-card.component.html',
  styleUrls: ['./integrante-card.component.css']
})
export class IntegranteCardComponent implements OnInit, OnChanges {
  @Input()
  public edit: boolean;
  @Input()
  public integrante: Integrante;
  @Input()
  public novo: boolean;
  @Output()
  public emitUsuarioSelecionado: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  protected integranteAux: Integrante;
  protected integranteForm: FormGroup;

  protected usuarios: any;
  protected usuarioSelecionado: Usuario;

  protected perfis: any;
  protected perfilSelecionado: string;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.perfis = [
      { label: 'Selecione', value: null },
      { label: 'Analista', value: 'Analista' },
      { label: 'Desenvolvedor', value: 'Desenvolvendo' },
      { label: 'Visitante', value: 'Visitante' }
    ];

    this.usuarioService.getUsuarios().subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = [];

        if (usuarios.length > 0) {
          usuarios.forEach((usuario: Usuario) => {
            this.usuarios.push({ label: `${usuario.nome}`, value: usuario });
          });

          this.usuarios.unshift({ label: 'Selecione', value: null });
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['integrante'] && changes['integrante'].currentValue) {
      this.initIntegrante();
      this.initForm();
    }
  }

  /**
   * Método para iniciar o formulário.
   */
  initForm(): void {
    this.integranteForm = this.fb.group({
      perfil: [this.integranteAux.perfil, [Validators.required]],
    });
  }

  /**
   * Salva os dados do formulário no objeto.
   */
  salvarDados(): void {
    this.integrante.perfil = this.integranteForm.get('perfil').value;
  }

  /**
   * Clona o objeto, e passa o objeto auxiliar para o formulário.
   */
  initIntegrante(): void {
    this.integranteAux = new Integrante(
      this.integrante.id,
      this.integrante.nome,
      this.integrante.perfil,
      this.integrante.projetos
    );
  }
}
