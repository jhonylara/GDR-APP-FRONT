import { Login } from './../../models/login';
import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicos/usuario/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected displayCadastro = false;
  protected erroCadastro = false;
  protected msgErroCadastro = '';
  protected usuarioCadastradoLog = false;

  protected displayEsqueceuSenha = false;
  protected erroEsqueceuSenha = false;
  protected msgErroEsqueceuSenha = '';
  protected usuarioEsqueceuSenhaLog = false;

  protected loginForm: FormGroup;
  protected erroLogin = false;
  protected msgErroLogin = '';

  private usuario: string;
  public save = false;
  protected user: Usuario;

  constructor(
    private userService: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.initForm();
    this.usuario = localStorage.getItem('usuario');

    this.verificaLogin();
    this.user = new Usuario(
      undefined,
      undefined,
      '',
      undefined
    );
  }

  /**
   * Verifica se o usuário já está logado, caso esteja, é redirecionado para url projeto.
   */
  verificaLogin(): void {
    if (localStorage['token']) {
      this.router.navigate(['projeto']);
    }
  }

  /**
   * Pega os valores dos formulário, cria um objeto login com os parametros do formulário e passa
   * o objeto através do método do serviço para logar.
   */
  onSubmit(): void {
    const email = this.loginForm.get('email').value;
    const senha = this.loginForm.get('senha').value;
    const login = new Login(email, senha);
    this.userService.auth(login).subscribe(
      () => this.userService.reload(),
      erroLogin => (
        this.erroLogin = true,
        this.msgErroLogin = erroLogin.error
      )
    );
  }

  /**
   * Inicia formulário.
   */
  initForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email, Validators.maxLength(80)]],
      senha: [null, [Validators.minLength(8)]]
    });
  }

  /**
   * Verifica se o campo do formulário está válido após ser clicado.
   *
   * @param campo - campo do formulário que será verificado.
   */
  verificaValidTouched(campo: string): boolean {
    return (
      !this.loginForm.get(campo).valid &&
      (this.loginForm.get(campo).touched || this.loginForm.get(campo).dirty)
    );
  }

  /**
   * Verifica se o campo de email está válido.
   */
  verificaEmailInvalido(): boolean {
    const campoEmail = this.loginForm.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  /**
   * Verifica se o formulário está válido.
   */
  verificaForm(): boolean {
    if (this.loginForm.get('email').valid && this.loginForm.get('senha').valid) {
      return true;
    }
  }

  /**
   * Método do primeng, utilizado quando for mostrar formulário de cadastro do CadastroComponent.
   */
  showDialogCadastro() {
    this.displayCadastro = true;
  }

  showDialogEsqueceuSenha() {
    this.displayEsqueceuSenha = true;
  }

  cadastrarUsuario() {
    this.userService.cadastrarUsuario(this.user).subscribe(
      () => (this.displayCadastro = false, this.usuarioCadastradoLog = true),
      erroCadastro => (
        this.erroCadastro = true,
        this.msgErroCadastro = erroCadastro.error
      )
    );
  }

  esqueceuSenha() {
    this.userService.esqueceuSenha(this.user).subscribe(
      () => (this.displayEsqueceuSenha = false, this.usuarioEsqueceuSenhaLog = true),
      erroEsqueceuSenha => (
        this.erroEsqueceuSenha = true,
        this.msgErroEsqueceuSenha = erroEsqueceuSenha.error
      )
    );
  }
}
