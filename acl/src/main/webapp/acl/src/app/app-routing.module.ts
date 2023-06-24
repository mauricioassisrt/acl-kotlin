import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {PapelComponent} from "./pages/papel/papel.component";
import {LoginComponent} from "./pages/login/login.component";
import {LoginGuard} from "./auth-guard-interceptors/guard/login.guard";
import {NotFoundComponent} from "./util/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'papel', component: PapelComponent},
      {path: 'new', component: PapelComponent},
      {path: 'edit/:id', component: PapelComponent},
    ], canActivate: [LoginGuard]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch:'full'},
      {path: 'login', component: LoginComponent}
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
