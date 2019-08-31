import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validar-codigo',
  templateUrl: './validar-codigo.component.html',
  styleUrls: ['./validar-codigo.component.css']
})
export class ValidarCodigoComponent implements OnInit {
  public validarSenhaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.validarSenhaForm = this.formBuilder.group({
      codigo: [undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]]
    });
  }

  /**
  * Verifica se esta válido e se foi clicado.
  * @param campo - campo do FormGroup
  */
  verificaValidTouched(campo: string): boolean {
    if (this.validarSenhaForm) {
      return (
        !this.validarSenhaForm.get(campo).valid &&
        (this.validarSenhaForm.get(campo).touched || this.validarSenhaForm.get(campo).dirty)
      );
    }
  }

  /**
   * Verifica se os campos email e senha estão validos.
   */
  verificaForm(): boolean {
    if (this.validarSenhaForm) {
      if (this.validarSenhaForm.valid) {
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
    this.router.navigate([`trocar-senha/${this.validarSenhaForm.get('codigo').value}`]);
  }
}
