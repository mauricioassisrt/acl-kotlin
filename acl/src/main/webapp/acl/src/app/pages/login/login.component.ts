import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {ToastComponent} from "../../util/toast/toast.component";
import {ToastOptions} from "../../util/toast/toast-options";
import {Login} from "../../model/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  toastOptions: ToastOptions = new ToastOptions()
  login: Login = new Login();
  loading: boolean = false;

  constructor(private authService: LoginService,
              private route: Router) {
  }

  ngOnInit(): void {
    if (this.authService.getToken() != null)
      this.route.navigate([''])
    else
      this.route.navigate(['login'])

  }

  onSubmit() {
    this.loading = true
    this.authService.autenticarUsuario(this.login.email, this.login.senha).subscribe(
      (httpResponse) => {
        this.loading = false
        this.authService.setToken(httpResponse.token);
        // Redirecionar para outra rota, por exemplo, a página inicial
        this.route.navigate(['']);
      },
      (error) => {
        this.toastOptions.menssagemError = error.error.message;
        this.toastOptions.tituloError = "Falha ao autenticar";
        this.toastOptions.classError = "bg-warning"
        this.toastComponent.show();
        this.loading = false
      }
    );
  }
}
