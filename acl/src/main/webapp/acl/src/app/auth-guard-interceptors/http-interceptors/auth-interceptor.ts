import {Injectable, ViewChild} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';
import {LoginService} from "../../services/login.service";
import jwt_decode from "jwt-decode";
import {Router} from "@angular/router";
import {ToastComponent} from "../../util/toast/toast.component";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  constructor(private authService: LoginService,
              private route: Router) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ) {
    const token = this.authService.getToken();

    if (token) {
      const decodedToken: any = jwt_decode(token);
      const expirationDate = new Date(decodedToken.exp * 1000); // Multiplica por 1000 para obter a data em milissegundos

      if (expirationDate < new Date()) {
        this.authService.logout();
        this.route.navigate(['login']);
      } else {
        // Token válido, adiciona o cabeçalho de autorização
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Intercepta erros de resposta HTTP
        if (error.status === 401) {
          this.authService.logout();
          this.route.navigate(['login'])
        }
        return throwError(error);
      })
    );
  }
}
