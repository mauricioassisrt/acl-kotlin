import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './auth-guard-interceptors/guard/login.guard';
import { NotFoundComponent } from './util/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard], // Proteja todas as rotas principais da aplicação com o LoginGuard
    children: [
      { path: 'papel', loadChildren: () => import('./pages/papel/papel.module').then(m => m.PapelModule) },
      // Outras rotas principais da aplicação, se houver...
    ],
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
