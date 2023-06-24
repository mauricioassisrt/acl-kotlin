import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../auth/services/login.service";
import {Router} from "@angular/router";
import {ToastComponent} from "../toast/toast.component";
import {ToastOptions} from "../toast/toast-options";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  toastOptions: ToastOptions = new ToastOptions()
  login = {
    email: "",
    senha: "",
  }
  loading: boolean = false;

  constructor(private authService: LoginService,
              private route: Router) {
  }

  ngOnInit(): void {
    if (this.authService.getToken() != null) {
      this.route.navigate([''])
    } else {
      this.route.navigate(['login'])
    }

  }

  onSubmit() {
    this.loading = true
    this.authService.login(this.login.email, this.login.senha).subscribe(
      (response) => {
        this.loading = false
        const token = response.token; // Supondo que sua API retorne um objeto com um token
        this.authService.setToken(token);
        // Redirecionar para outra rota, por exemplo, a página inicial
        this.route.navigate(['']);
      },
      (error) => {
        this.toastOptions.menssagemError =  error.error.message;
        this.toastOptions.tituloError =  "Falha ao autenticar";
        this.toastOptions.classError ="bg-warning"
        this.toastComponent.show();
        this.loading = false
      }
    );
  }
}
