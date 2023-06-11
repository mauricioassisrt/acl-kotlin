import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {PapelComponent} from "./papel/papel.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./guard/login.guard";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
