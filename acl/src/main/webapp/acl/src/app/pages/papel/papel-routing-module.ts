import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PapelListaComponent } from './papel-lista/papel-lista.component';
import {PapelEditComponent} from "./papel-edit/papel-edit.component";

export const PAPEL_ROUTES: Routes = [
  {
    path: '',
    component: PapelListaComponent
  },
  {
    path: ':id',
    component: PapelEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(PAPEL_ROUTES)],
  exports: [RouterModule],
})
export class PapelRoutingModule {}
