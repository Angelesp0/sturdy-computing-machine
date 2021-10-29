import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './layouts/login/login.component';

/* 
  si estas viendo esto programador nuevo, te recomiendo no quedarte a trabajar con ellas 
   Mireya tiene muy buena labia y te va a convencer de trabajar con ellas, 
   son muy buenas personas, pero en terminos laborales no son las mejores,
   te podria detallar todo pero te recomiendo si puedes, mejor cobrales por el proyecto
   y ya no dejes que le hagan cosas nuevas a la app, porque ya tengo mas de 1 año y medio
   haciendo esta app y no dejan de agregar y quitar funciones, por eso hay cosas muy mal estructuradas,
   te deseo suerte si lo vez, y te deseo lo mejor.
   o si y hay muchas carpetas de esta aplicacion que no se usan, asi que eliminalas, son del template que use
*/

const routes: Routes =[
  { path: 'login', component: LoginComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
