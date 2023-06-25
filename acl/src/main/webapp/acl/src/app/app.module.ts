import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthModule} from "./auth-guard-interceptors/auth.module";
import {HomeComponent} from './layout/home/home.component';
import {PapelComponent} from './pages/papel/papel.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginService} from "./services/login.service";
import { ToastComponent } from './util/toast/toast.component';
import {AuthInterceptor} from "./auth-guard-interceptors/http-interceptors/auth-interceptor";
import { LoadingComponent } from './util/loading/loading.component';
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
    ReactiveFormsModule
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
