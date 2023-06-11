import { Component } from '@angular/core';
import {LoginService} from "../auth/services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 login = {
   email:"",
   senha: "",
 }

  constructor(private authService: LoginService, private route: Router) {}

  onSubmit(){
    this.authService.login(this.login.email, this.login.senha).subscribe(
      (response) => {
        const token = response.token; // Supondo que sua API retorne um objeto com um token
        this.authService.setToken(token);
        // Redirecionar para outra rota, por exemplo, a página inicial
        this.route.navigate([''])
      },
      (error) => {
        console.error('Erro no login:', error);
      }
    );
  }
}
