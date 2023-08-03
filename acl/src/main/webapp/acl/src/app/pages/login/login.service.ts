import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

import jwt_decode from 'jwt-decode';
import {HttpResponse} from "./http-response";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  autenticarUsuario(email: string, senha: string): Observable<HttpResponse> {
    return this.http.post<HttpResponse>(`${environment.api}/login`, {email, senha});
  }

  getDados(): Observable<any> {
    // const url = 'http://localhost:8080/api/papeis/'; // Substitua pela URL correta do seu endpoint Spring Boot
    //
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.getToken()}`
    // });
    return this.http.get(`http://localhost:8080/api/papeis/`);
    //this.http.get(url, { headers: headers });
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getAuthorizationToken() {
    return window.localStorage.getItem('token');
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined)
      return new Date(0);

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token)
      return true;

    if (this.getTokenExpirationDate(token) === undefined)
      return false

    return !(this.getTokenExpirationDate(token).valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token)
      return false;
    else if (this.isTokenExpired(token))
      return false;

    return true;
  }
}
