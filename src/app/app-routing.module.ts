import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCriarConsultaComponent } from './components/page/page-criar-consulta/page-criar-consulta.component';
import { PageCriarContaComponent } from './components/page/page-criar-conta/page-criar-conta.component';
import { PageHomeComponent } from './components/page/page-home/page-home.component';
import { PageLoginComponent } from './components/page/page-login/page-login.component';

const routes: Routes = [
  {
    path: '',
    component: PageLoginComponent,
  },
  {
    path: 'criar-conta',
    component: PageCriarContaComponent,
  },
  {
    path: 'home',
    component: PageHomeComponent,
  },
  {
    path: 'criar-consulta',
    component: PageCriarConsultaComponent,
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
