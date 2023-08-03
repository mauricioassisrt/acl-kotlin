import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PapelListaComponent } from './papel-lista/papel-lista.component';

const routes: Routes = [
  {
    path: '',
    component: PapelListaComponent,
    children: [
      // { path: 'new', component: PapelCriacaoComponent },
      // { path: 'edit/:id', component: PapelEdicaoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PapelRoutingModule {}
