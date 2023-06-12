import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../auth/services/login.service";
import {Router} from "@angular/router";
import {ToastComponent} from "../toast/toast.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  tituloError: string = '';
  menssagemError: string = '';
  classError: string = '';
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
    this.startLoading();
    this.authService.login(this.login.email, this.login.senha).subscribe(
      (response) => {
        this.stopLoading();
        const token = response.token; // Supondo que sua API retorne um objeto com um token
        this.authService.setToken(token);
        // Redirecionar para outra rota, por exemplo, a página inicial
        this.route.navigate(['']);
      },
      (error) => {
        this.tituloError = "Falha ao autenticar";
        this.menssagemError = error.error.message;
        this.classError = "bg-warning"
        this.toastComponent.show();
        this.stopLoading();
      }
    );
  }


  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }

}
