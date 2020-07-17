import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UsersComponent, NgbdModalConfirmAutofocus, ModalEditar } from './users/users.component';
import { LoginComponent } from './layouts/login/login.component';
import { CompaniesComponent, ModalNuevaEmpresa, ModalEditarEmpresa } from './companies/companies.component';
import { ServicesComponent, ModalEditarServicio, ModalNuevoServicio } from './services/services.component';
import { AddCompanyComponent } from './companies/add-company/add-company.component';

import { DataTablesModule } from 'angular-datatables';


@NgModule({
  imports: [
    DataTablesModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    ModalEditarServicio,
    ModalNuevoServicio,
    ModalNuevaEmpresa,
    ModalEditarEmpresa,
    AppComponent,
    AdminLayoutComponent,
    UsersComponent,
    NgbdModalConfirmAutofocus,
    ModalEditar,
    LoginComponent,
    CompaniesComponent,
    ServicesComponent,
    AddCompanyComponent

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
