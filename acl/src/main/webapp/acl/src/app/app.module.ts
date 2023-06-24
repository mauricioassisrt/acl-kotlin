import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AuthModule} from "./auth/auth.module";
import {HomeComponent} from './layout/home/home.component';
import {PapelComponent} from './papel/papel.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginService} from "./auth/services/login.service";
import { ToastComponent } from './toast/toast.component';
import {AuthInterceptor} from "./http.interceptors/auth-interceptor";
import { LoadingComponent } from './loading/loading.component';
import { NotFoundComponent } from './util/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PapelComponent,
    ToastComponent,
    LoadingComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
