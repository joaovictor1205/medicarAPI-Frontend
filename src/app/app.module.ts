import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/template/login/login.component';
import { PageLoginComponent } from './components/page/page-login/page-login.component';
import { PageHomeComponent } from './components/page/page-home/page-home.component';
import { PageCriarContaComponent } from './components/page/page-criar-conta/page-criar-conta.component';
import { PageCriarConsultaComponent } from './components/page/page-criar-consulta/page-criar-consulta.component';
import { CriarContaComponent } from './components/template/criar-conta/criar-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageLoginComponent,
    PageHomeComponent,
    PageCriarContaComponent,
    PageCriarConsultaComponent,
    CriarContaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }                                
