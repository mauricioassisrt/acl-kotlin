import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {LoadingModule} from "../../util/loading/loading.module";
import {ToastModule} from "../../util/toast/toast.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoadingModule,
    ToastModule,
    FormsModule,
  ],
  exports: [
    LoginComponent // Exportar o componente Pessoa para ser usado em outros módulos (se necessário)
  ],
})
export class LoginModule { }
