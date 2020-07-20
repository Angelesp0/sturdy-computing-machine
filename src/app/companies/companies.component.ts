import { Component, OnInit, Type, Input } from '@angular/core';
import { CompanyService } from './../_services/company/company.service';
import { Company } from '../../../../gglobals-ionic/gglobals/src/app/models/company';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject  } from 'rxjs';
import { map  } from 'rxjs/operators';
import { Response } from '@angular/http';

// Editar Usuario
@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Editar Empresa</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
  <p><strong><span class="text-primary">DATOS GENERALES
          </span></strong></p>
    <div class="row">
        <div class="col-md">
            <label>Nombre<strong><span class="text-danger">*</span></strong></label>
            <input name="company" inputmode="text" class="form-control" [(ngModel)]="this.data.company">
        </div>
        <div class="col-md">
            <label>RFC<strong><span class="text-danger">*</span></strong></label>
            <input name="rfc" inputmode="numeric" class="form-control" [(ngModel)]="this.data.rfc">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
            <label>Usuario de la Empresa<strong><span class="text-danger">*</span></strong></label>
            <input name="users_id_user" inputmode="text" class="form-control" [(ngModel)]="this.data.users_id_user">
        </div>
        <div class="col-md">
            <label>Estado<strong><span class="text-danger">*</span></strong></label>
            <input name="state" inputmode="text" class="form-control" [(ngModel)]="this.data.state">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
            <label>Ciudad<strong><span class="text-danger">*</span></strong></label>
            <input name="city" inputmode="text" class="form-control" [(ngModel)]="this.data.city">
        </div>
        <div class="col-md-2">
            <label>Tipo</label>
            <input name="type_colony" inputmode="text" class="form-control" [(ngModel)]="this.data.type_colony">
        </div>
        <div class="col-md">
            <label>Colonia<strong><span class="text-danger">*</span></strong></label>
            <input name="colony" inputmode="text" class="form-control" [(ngModel)]="this.data.colony">
        </div>
    </div>
    <div class="row">
        <div class="col-md-2">
            <label>Tipo</label>
            <input name="type_street" inputmode="text" class="form-control" [(ngModel)]="this.data.type_street">
        </div>
        <div class="col-md">
            <label>Calle<strong><span class="text-danger">*</span></strong></label>
            <input name="street" inputmode="text" class="form-control" [(ngModel)]="this.data.street">
        </div>
        <div class="col-md-2">
            <label>Tipo</label>
            <input name="type_street3" inputmode="text" class="form-control" [(ngModel)]="this.data.type_street3">
        </div>
        <div class="col-md">
            <label>Calle posterior<strong><span class="text-danger">*</span></strong></label>
            <input name="street3" inputmode="text" class="form-control" [(ngModel)]="this.data.street3">
        </div>
    </div>
    <div class="row">
        <div class="col-md-2">
            <label>Tipo</label>
            <input name="type_street1" inputmode="text" class="form-control" [(ngModel)]="this.data.type_street1">
        </div>
        <div class="col-md">
            <label>Calle derecha<strong><span class="text-danger">*</span></strong></label>
            <input name="street1" inputmode="text" class="form-control" [(ngModel)]="this.data.street1">
        </div>
        <div class="col-md-2">
            <label>Tipo</label>
            <input name="type_street2" inputmode="text" class="form-control" [(ngModel)]="this.data.type_street2">
        </div>
        <div class="col-md">
            <label>Calle izquierda<strong><span class="text-danger">*</span></strong></label>
            <input name="name_mall" inputmode="text" class="form-control" [(ngModel)]="this.data.name_mall">
        </div>
    </div>
    <div class="row">
        <div class="col-md-2">
            <label>Tipo</label>
            <input name="type_mall" inputmode="text" class="form-control" [(ngModel)]="this.data.type_mall">
        </div>
        <div class="col-md">
            <label>Centro comercial</label>
            <input name="name_mall" inputmode="text" class="form-control" [(ngModel)]="this.data.name_mall">
        </div>
        <div class="col-md-2">
            <label>Piso</label>
            <input name="floor" inputmode="numeric" class="form-control" [(ngModel)]="this.data.floor">
        </div>
        <div class="col-md-2">
            <label># local</label>
            <input name="local_number" inputmode="numeric" class="form-control" [(ngModel)]="this.data.local_number">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
            <label>CP<strong><span class="text-danger">*</span></strong></label>
            <input name="cp" inputmode="numeric" class="form-control" [(ngModel)]="this.data.cp">
        </div>
        <div class="col-md-3">
            <label>Numero ext</label>
            <input name="num_ext" inputmode="numeric" class="form-control" [(ngModel)]="this.data.num_ext">
        </div>
        <div class="col-md-3">
            <label>Numero int</label>
            <input name="num_int" inputmode="numeric" class="form-control" [(ngModel)]="this.data.num_int">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
            <label>¿Requiere Factura?<strong><span class="text-danger">*</span></strong></label>
            <input name="invoice" inputmode="tel" class="form-control" placeholder="Si / No" [(ngModel)]="this.data.invoice">
        </div>
        <div class="col-md">
            <label>Telefono<strong><span class="text-danger">*</span></strong></label>
            <input name="tel" inputmode="numeric" class="form-control" [(ngModel)]="this.data.tel">
        </div>
    </div>
    <br>
    <p><strong><span class="text-primary">DATOS DE CONTACTO DEL ESTABLECIMIENTO PARA NEGOCIOS
    </span></strong></p>
    <div class="row">
        <div class="col-md">
            <label>Nombre del contacto<strong><span class="text-danger">*</span></strong></label>
            <input name="contact_name" inputmode="text" class="form-control" [(ngModel)]="this.data.contact_name">
        </div>
        <div class="col-md">
            <label>Puesto<strong><span class="text-danger">*</span></strong></label>
            <input name="job" inputmode="text" class="form-control" [(ngModel)]="this.data.job">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
            <label>Celular<strong><span class="text-danger">*</span></strong></label>
            <input name="contact_tel" inputmode="tel" class="form-control" [(ngModel)]="this.data.contact_tel">
        </div>
        <div class="col-md">
            <label>Email<strong><span class="text-danger">*</span></strong></label>
            <input name="contact_email" inputmode="email" class="form-control" [(ngModel)]="this.data.contact_email">
        </div>
    </div>
    <br>
    <p><strong><span class="text-primary">PERFIL GENERAL DE LA EMPRESA
    </span></strong></p>
    <div class="row">
        <div class="col-md-2">
            <label>Tipo</label>
            <input name="facilities" inputmode="text" class="form-control" [(ngModel)]="this.data.facilities">
        </div>
        <div class="col-md">
            <label>Distribucion<strong><span class="text-danger">*</span></strong></label>
            <input name="distribution" inputmode="text" class="form-control" [(ngModel)]="this.data.distribution">
        </div>
        <div class="col-md">
            <label>Ambito de operaciones<strong><span class="text-danger">*</span></strong></label>
            <input name="scope_of_operations" inputmode="text" class="form-control" [(ngModel)]="this.data.scope_of_operations">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
            <label>Comienzo de la empresa<strong><span class="text-danger">*</span></strong></label>
            <input name="company_start" class="form-control" [(ngModel)]="this.data.company_start" type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31">
        </div>
        <div class="col-md">
            <label>Rango de ventas<strong><span class="text-danger">*</span></strong></label>
            <input name="sales_range" inputmode="text" class="form-control" [(ngModel)]="this.data.sales_range">
        </div>
    </div>
    <br>
    <p><strong><span class="text-primary">ACTIVIDAD ECONOMICA
    </span></strong></p>
    <div class="row">
        <div class="col-md">
            <label>Actividad Principal<strong><span class="text-danger">*</span></strong></label>
            <input name="main_activity" inputmode="text" class="form-control" [(ngModel)]="this.data.main_activity">
        </div>
        <div class="col-md">
            <label>Codigo de actividad<strong><span class="text-danger">*</span></strong></label>
            <input name="activity_code" inputmode="numeric" class="form-control" [(ngModel)]="this.data.activity_code">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
            <label>¿Exportan?<strong><span class="text-danger">*</span></strong></label>
            <input name="export" inputmode="text" class="form-control" placeholder="Si / No" [(ngModel)]="this.data.export">
        </div>
        <div class="col-md">
            <label>¿Importan?<strong><span class="text-danger">*</span></strong></label>
            <input name="import" inputmode="text" class="form-control" placeholder="Si / No" [(ngModel)]="this.data.import">
        </div>
    </div>
    <br>
    <p><strong><span class="text-primary">INFORMACIÓN ADICIONAL
    </span></strong></p>
    <div class="row">
        <div class="col-md">
            <label>Total de empleados<strong><span class="text-danger">*</span></strong></label>
            <input name="employees" inputmode="numeric" class="form-control" [(ngModel)]="this.data.employees">
        </div>
        <div class="col-md">
            <label>Empleadas Femeninas<strong><span class="text-danger">*</span></strong></label>
            <input name="female_employees" inputmode="numeric" class="form-control" [(ngModel)]="this.data.female_employees">
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <label>Areas de atencion</label>
            <input name="attention_area" inputmode="text" class="form-control" [(ngModel)]="this.data.attention_area">
        </div>
        <div class="col-md">
            <label>¿Creditos, Prestamos o Financiamiento?</label>
            <input name="financing" inputmode="text" class="form-control" [(ngModel)]="this.data.financing">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
            <label>¿Cuentan con equipo digital?<strong><span class="text-danger">*</span></strong></label>
            <input name="digital_equipment" inputmode="text"
            class="form-control" placeholder="Si / No" [(ngModel)]="this.data.digital_equipment">
        </div>
        <div class="col-md">
            <label>¿Cuentan con Internet?<strong><span class="text-danger">*</span></strong></label>
            <input name="internet" inputmode="text" class="form-control" placeholder="Si / No" [(ngModel)]="this.data.internet">
        </div>
        <div class="col-md">
            <label>¿han Pagado publicidad?</label>
            <input name="advertising" inputmode="text" class="form-control" placeholder="Si / No" [(ngModel)]="this.data.advertising">
        </div>
        <div class="col-md">
            <label>¿Recibieron capacitacion?</label>
            <input name="training" inputmode="text" class="form-control" placeholder="Si / No" [(ngModel)]="this.data.training">
        </div>
    </div>
    <br>
    <p><strong><span class="text-primary">INFORMACIÓN COMERCIAL
    </span></strong></p>
    <div class="row">
        <div class="col-md">
            <label>Facebook</label>
            <input name="facebook" inputmode="text" class="form-control" [(ngModel)]="this.data.facebook">
        </div>
        <div class="col-md">
            <label>Twitter</label>
            <input name="twiter" inputmode="text" class="form-control" [(ngModel)]="this.data.twiter">
        </div>
        <div class="col-md">
            <label>Grupo empresarial</label>
            <input name="business_group" inputmode="text" class="form-control" [(ngModel)]="this.data.business_group">
        </div>
        <div class="col-md">
            <label>Camara y/o asociacion</label>
            <input name="association" inputmode="text" class="form-control" [(ngModel)]="this.data.association">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
            <label>Cluster</label>
            <input name="cluster" inputmode="text" class="form-control" [(ngModel)]="this.data.cluster">
        </div>
        <div class="col-md">
            <label>Cadena productiva</label>
            <input name="productive_chain" inputmode="text" class="form-control" [(ngModel)]="this.data.productive_chain">
        </div>
        <div class="col-md">
            <label>¿Tienen distintivo?</label>
            <input name="distinctive" inputmode="text" class="form-control" placeholder="Si / No" [(ngModel)]="this.data.distinctive">
        </div>
    </div>
    <br>
    <p><strong>Estas por editar el usuario <span class="text-primary">Verifica</span> la informacion</strong></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
      <button type="button" ngbAutofocus class="btn btn-danger" (click) ="update()">Ok</button>
    </div>
  `
})
export class ModalEditarEmpresa {
  @Input() fromParent;
  data: any;
  constructor(
    public modal: NgbActiveModal,
    private companyService: CompanyService,
    public router: Router) {
      this.data = new Company();
    }
    ngOnInit() {
      this.companyService.getCompany(this.fromParent).subscribe(response => {
        this.data = response;
      });
    }
    update() {
      this.companyService.updateCompany(this.fromParent, this.data).subscribe(response => {
        this.data = response;
        this.modal.close('Ok click');
      });
    }
}

const MODALS: {[name: string]: Type<any>} = {
  editar: ModalEditarEmpresa
};

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
  (click)="modal.close('Ok click')">Ok</button>`;
  companies: any;
  data: any;
  constructor(
    private _modalService: NgbModal,
    public companyService: CompanyService
    ) {
      this.data = new Company();
     }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.companyService.getCompanies().pipe(map(this.extractData)).subscribe(response => {
      this.dtTrigger.next();
      this.companies  = response;
    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  open(name: string, id?: number) {
    const modalRef = this._modalService.open(MODALS[name]);
    modalRef.componentInstance.fromParent = id;
  }

}

