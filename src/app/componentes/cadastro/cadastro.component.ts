import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../servicos/usuario/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  public cadastroForm: FormGroup;
  @Input()
  public user: Usuario;

  constructor(
    private userService: UsuarioService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.user ? this.initForm() : delete this.user;
  }

  initForm(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: [undefined, [Validators.required, Validators.minLength(5)]],
      email: [undefined, [Validators.required, Validators.email, Validators.maxLength(64)]],
      senha: [undefined, [Validators.required, Validators.minLength(8)]],
      confirmarSenha: [undefined, [Validators.required, Validators.minLength(8)]]
    });
  }

  /**
   * Verifica se esta válido e se foi clicado.
   * @param campo - campo do FormGroup
   */
  verificaValidTouched(campo: string): boolean {
    return (
      !this.cadastroForm.get(campo).valid &&
      (this.cadastroForm.get(campo).touched || this.cadastroForm.get(campo).dirty)
    );
  }

  /**
   * Verifica senha é a mesma do campo confirmar senha - CadastroComponent -
   */
  verificaSenha(): boolean {
    if (this.cadastroForm.get('senha').value !== this.cadastroForm.get('confirmarSenha').value) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Verifica se o email é válido apís clicar fora do input.
   */
  verificaEmailInvalido(): boolean {
    const campoEmail = this.cadastroForm.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  /**
   * Verifica se os campos email e senha estão validos.
   */
  verificaForm(): boolean {
    if (this.cadastroForm.invalid) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Salva os dados do form no objeto login.
   */
  salvarDados(): void {
    this.user.nome = this.cadastroForm.get('nome').value;
    this.user.email = this.cadastroForm.get('email').value;
    this.user.senha = this.cadastroForm.get('senha').value;
  }

}
