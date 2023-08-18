import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingModule} from "../../util/loading/loading.module";
import {ToastModule} from "../../util/toast/toast.module";
import { PapelListaComponent } from './papel-lista/papel-lista.component';
import {PAPEL_ROUTES, PapelRoutingModule} from "./papel-routing-module";
import { PapelEditComponent } from './papel-edit/papel-edit.component';
import { RouterModule } from '@angular/router';
import {PapelService} from "./papel.service";
import {FormsModule} from "@angular/forms";
import {PaginatorModule} from "../../util/paginator/paginator.module";

@NgModule({
  declarations: [
    PapelListaComponent,
    PapelEditComponent,
  ],
    imports: [
        CommonModule,
        LoadingModule,
        ToastModule,
        PapelRoutingModule,
        PaginatorModule,
        RouterModule.forChild(PAPEL_ROUTES),
        FormsModule,
        // Outros módulos que você possa precisar aqui
    ],
  providers: [PapelService],
  exports: [
    PapelListaComponent
  ],
})
export class PapelModule {}
