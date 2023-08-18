import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "./auth-guard-interceptors/auth.module";
import {HomeComponent} from './layout/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginService} from "./pages/login/login.service";
import {AuthInterceptor} from "./auth-guard-interceptors/http-interceptors/auth-interceptor";
import {NotFoundComponent} from './util/not-found/not-found.component';
import {PapelModule} from "./pages/papel/papel.module";
import {LoginModule} from "./pages/login/login.module";
import {LoadingModule} from "./util/loading/loading.module";
import {ToastModule} from "./util/toast/toast.module";
import {PaginatorModule} from "./util/paginator/paginator.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        LoginModule,
        PapelModule,
        PaginatorModule,
        LoadingModule,
        ToastModule
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
