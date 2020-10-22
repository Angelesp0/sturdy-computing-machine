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
import { CompaniesComponent, ModalEditarEmpresa } from './companies/companies.component';
import { ServicesComponent, ModalEditarServicio, ModalNuevoServicio } from './services/services.component';
import { AddCompanyComponent } from './companies/add-company/add-company.component';

import { DataTablesModule } from 'angular-datatables';
import {MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule,  } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { CustomDatePipe } from './pipe/customDatePipe';
import { JsPDFComponent } from './companies/js-pdf/js-pdf.component';
import { AddMediaComponent } from './companies/add-company/add-media/add-media.component';
import { FileUploadModule  } from 'ng2-file-upload';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PaymentsComponent } from './companies/payments/payments.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { CollectComponent } from './collect/collect.component';
import { MaterialComponent } from './material/material.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AccountComponent } from './account/account.component';
import { BasicAuthInterceptor } from './_helpers/basic-auth.interceptor';
import { DocumentsComponent } from './companies/documents/documents.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS} from '@angular/material/checkbox';




@NgModule({
  imports: [
    FileUploadModule ,
    MatTabsModule,
    MatDividerModule,
    MatExpansionModule,
    NgxPayPalModule,
    PdfViewerModule,
    ReactiveFormsModule,
    MatRadioModule,
    DataTablesModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    MatCheckboxModule
  ],
  declarations: [
    // FileSelectDirective,
    CustomDatePipe,
    ModalEditarServicio,
    ModalNuevoServicio,
    ModalEditarEmpresa,
    AppComponent,
    AdminLayoutComponent,
    UsersComponent,
    NgbdModalConfirmAutofocus,
    ModalEditar,
    LoginComponent,
    CompaniesComponent,
    ServicesComponent,
    AddCompanyComponent,
    JsPDFComponent,
    AddMediaComponent,
    PaymentsComponent,
    CollectComponent,
    MaterialComponent,
    AccountComponent,
    DocumentsComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptor,
      multi: true
    }, {
      provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: 'check'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
