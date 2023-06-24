import {Injectable, ViewChild} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ToastComponent} from "../toast/toast.component";
import {ToastOptions} from "../toast/toast-options";


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  toastOptions: ToastOptions = new ToastOptions()
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    const token = window.localStorage.getItem('token')
    if (token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
