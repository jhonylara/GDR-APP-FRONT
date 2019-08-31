import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicos/usuario/usuario.service';

@Component({
  selector: 'app-troca-senha',
  templateUrl: './troca-senha.component.html',
  styleUrls: ['./troca-senha.component.css']
})
export class TrocaSenhaComponent implements OnInit {
  public user: Usuario;
  public trocarSenhaForm: FormGroup;
  protected trocaSenhaLog = false;
  protected erroTrocarSenha = false;
  protected msgErroTrocarSenha: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.user = new Usuario(
      undefined,
      undefined,
      '',
      undefined
    );
    this.initForm();
  }

  initForm(): void {
    this.trocarSenhaForm = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.email, Validators.maxLength(64)]],
      senha: [undefined, [Validators.required, Validators.minLength(8)]],
      confirmarSenha: [undefined, [Validators.required, Validators.minLength(8)]]
    });
  }

  /**
   * Verifica senha é a mesma do campo confirmar senha - CadastroComponent -
   */
  verificaSenha(): boolean {
    if (this.trocarSenhaForm.get('senha').value !== this.trocarSenhaForm.get('confirmarSenha').value) {
      return true;
    } else {
      return false;
    }
  }


  /**
   * Verifica se esta válido e se foi clicado.
   * @param campo - campo do FormGroup
   */
  verificaValidTouched(campo: string): boolean {
    if (this.trocarSenhaForm) {
      return (
        !this.trocarSenhaForm.get(campo).valid &&
        (this.trocarSenhaForm.get(campo).touched || this.trocarSenhaForm.get(campo).dirty)
      );
    }
  }

  /**
   * Verifica se o email é válido apís clicar fora do input.
   */
  verificaEmailInvalido(): boolean {
    if (this.trocarSenhaForm) {
      const campoEmail = this.trocarSenhaForm.get('email');
      if (campoEmail.errors) {
        return campoEmail.errors['email'] && campoEmail.touched;
      }
    }
  }

  /**
   * Verifica se os campos email e senha estão validos.
   */
  verificaForm(): boolean {
    if (this.trocarSenhaForm) {
      if (this.trocarSenhaForm.valid) {
        return true;
      } else {
        return false;
      }
    }
  }

  /**
   * Salva os dados do form no objeto login.
   */
  onSubmit(): void {
    const codigo: string = this.route.snapshot.paramMap.get('codigo').toString();
    this.user.email = this.trocarSenhaForm.get('email').value;
    this.user.senha = this.trocarSenhaForm.get('senha').value;

    if (codigo) {
      this.usuarioService.trocarSenha(this.user, codigo).subscribe(
        () => this.trocaSenhaLog = true,
        erroTrocaSenha => (
          this.erroTrocarSenha = true,
          this.msgErroTrocarSenha = erroTrocaSenha.error
        )
      );
    }
  }
}
