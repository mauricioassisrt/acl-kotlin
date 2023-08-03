import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingModule} from "../../util/loading/loading.module";
import {ToastModule} from "../../util/toast/toast.module";
import { PapelListaComponent } from './papel-lista/papel-lista.component';
import {PapelRoutingModule} from "./papel-routing-module";

@NgModule({
  declarations: [
    PapelListaComponent,
  ],
  imports: [
    CommonModule,
    LoadingModule,
    ToastModule,
    PapelRoutingModule
    // Outros módulos que você possa precisar aqui
  ],
  exports: [
    PapelListaComponent
  ],
})
export class PapelModule {}
