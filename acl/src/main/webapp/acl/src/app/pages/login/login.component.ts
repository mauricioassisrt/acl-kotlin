import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {ToastComponent} from "../../util/toast/toast.component";
import {ToastOptions} from "../../util/toast/toast-options";
import {Login} from "./login";
import {Util} from "../../util/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  @ViewChild('emailInput', {static: true}) emailInput!: ElementRef;
  @ViewChild('senhaInput', {static: true}) senhaInput!: ElementRef;
  toastOptions: ToastOptions = new ToastOptions()
  login: Login = new Login();
  loading: boolean = false;

  constructor(private authService: LoginService,
              private route: Router,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.verificaExistenciaToken()
  }

  private verificaExistenciaToken() {
    if (this.authService.getToken() != null)
      this.route.navigate([''])
    else
      this.route.navigate(['login'])
  }

  onSubmit() {
    this.loading = true
    if (this.validarPreenchimentoCampos()) {
      this.authService.autenticarUsuario(this.login.email, this.login.senha).subscribe(
        (httpResponse) => {
          this.loading = false
          this.authService.setToken(httpResponse.token);
          // Redirecionar para outra rota, por exemplo, a página inicial
          this.route.navigate(['']);
        },
        (error) => {
          ToastOptions.montaToaster(
            error.error.message,
            "Falha ao autenticar",
            "bg-warning",
            this.toastOptions,
            this.toastComponent)
          this.loading = false
        }
      );
    }
  }

  private validarPreenchimentoCampos(): boolean {
    let isValid = true;
    if (!this.login.email) {
      isValid = false;
      this.loading = false
      Util.adicionaEstiloErrorInput(this.emailInput.nativeElement, this.renderer)
      Util.exibeToastErrorCamposObrigatorios(this.toastOptions, this.toastComponent)
    } else {
      Util.removerEstiloErrorInput(this.emailInput.nativeElement, this.renderer)
    }

    if (!this.login.senha) {
      isValid = false;
      this.loading = false
      Util.adicionaEstiloErrorInput(this.senhaInput.nativeElement, this.renderer)
      Util.exibeToastErrorCamposObrigatorios(this.toastOptions, this.toastComponent)
    } else {
      Util.removerEstiloErrorInput(this.senhaInput.nativeElement, this.renderer)
    }
    return isValid
  }

}
