import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCriarContaComponent } from './components/page/page-criar-conta/page-criar-conta.component';
import { PageLoginComponent } from './components/page/page-login/page-login.component';

const routes: Routes = [
  {
    path: '',
    component: PageLoginComponent,
  },
  {
    path: 'criar-conta',
    component: PageCriarContaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
