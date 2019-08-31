import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent implements OnInit {
  @Input()
  public user: Usuario;
  public esqueceuSenhaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.user ? this.initForm() : delete this.user;
  }

  initForm(): void {
    this.esqueceuSenhaForm = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.email, Validators.maxLength(64)]]
    });
  }

  /**
   * Verifica se esta válido e se foi clicado.
   * @param campo - campo do FormGroup
   */
  verificaValidTouched(campo: string): boolean {
    return (
      !this.esqueceuSenhaForm.get(campo).valid &&
      (this.esqueceuSenhaForm.get(campo).touched || this.esqueceuSenhaForm.get(campo).dirty)
    );
  }

  /**
   * Verifica se o email é válido apís clicar fora do input.
   */
  verificaEmailInvalido(): boolean {
    const campoEmail = this.esqueceuSenhaForm.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  /**
   * Verifica se os campos email e senha estão validos.
   */
  verificaForm(): boolean {
    if (this.esqueceuSenhaForm.invalid) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Salva os dados do form no objeto login.
   */
  salvarDados(): void {
    this.user.email = this.esqueceuSenhaForm.get('email').value;
  }
}
