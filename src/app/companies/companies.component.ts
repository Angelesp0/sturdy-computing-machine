import { Component, OnInit, Type, Input } from '@angular/core';
import { CompanyService } from './../_services/company/company.service';
import { Company } from '../../../../gglobals-ionic/gglobals/src/app/models/company';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Agregar Empresa
@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Agregar Empresa Nueva</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div class="row">
        <div class="col-md-12">
                <label>Nombre</label>
                <input name="company" inputmode="text" class="form-control" placeholder="Nombre" [(ngModel)]="this.data.company">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
                <label>Servicio</label>
                <input name="service" inputmode="text" class="form-control" placeholder="Servicio" [(ngModel)]="this.data.service">
        </div>

        <div class="col-md">
                <label>RFC</label>
                <input name="rfc" inputmode="text" class="form-control" placeholder="RFC" [(ngModel)]="this.data.rfc">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
                <label>Estado</label>
                <input name="state" inputmode="text" class="form-control" placeholder="Estado"[(ngModel)]="this.data.state">
        </div>
        <div class="col-md">
                <label>City</label>
                <input name="city" inputmode="text" class="form-control" placeholder="City" [(ngModel)]="this.data.city">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
                <label>Colonia</label>
                <input name="colony" inputmode="text" class="form-control" placeholder="Colonia" [(ngModel)]="this.data.colony">
        </div>

        <div class="col-md">
                <label>Calle</label>
                <input name="street" inputmode="text" class="form-control" placeholder="Calle" [(ngModel)]="this.data.street">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
                <label>Numero Exterior</label>
                <input name="num_ext" inputmode="text" class="form-control" placeholder="Numero Exterior" [(ngModel)]="this.data.num_ext">
        </div>

        <div class="col-md">
                <label>Numero interior</label>
                <input name="num_int" inputmode="text" class="form-control" placeholder="Numero Interior" [(ngModel)]="this.data.num_int">
        </div>

        <div class="col-md">
                <label>CP</label>
                <input name="cp" inputmode="text" class="form-control" placeholder="CP" [(ngModel)]="this.data.cp">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
                <label>Telefono</label>
                <input name="tel" inputmode="text" class="form-control" placeholder="Telefono" [(ngModel)]="this.data.tel">
        </div>
        <div class="col-md">
                <label>¿Requiere Factura?</label>
                <input name="invoice" inputmode="text" class="form-control" placeholder="Si/No" [(ngModel)]="this.data.invoice">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
                <label>Contacto de la empresa</label>
        </div>
    </div>
    <div class="row">
        <div class="col-md">
                <label>Nombre </label>
                <input name="name" inputmode="text" class="form-control" placeholder="Nombre" [(ngModel)]="this.data.name">
        </div>
        <div class="col-md">
                <label>Apellido</label>
                <input name="last_name" inputmode="text" class="form-control" placeholder="Apellido" [(ngModel)]="this.data.last_name">
        </div>
    </div>
    <div class="row">
        <div class="col-md">
                <label>No. de Celular del contacto</label>
                <input name="mobile" inputmode="text" class="form-control" placeholder="Numero" [(ngModel)]="this.data.mobile">
        </div>
        <div class="col-md">
                <label>Email del contacto</label>
                <input name="email" inputmode="text" class="form-control" placeholder="Correo Electronico" [(ngModel)]="this.data.email">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
                <label>Usuario de la Empresa</label>
                <input name="users_id_user" inputmode="text" class="form-control" placeholder="id-usuario"
                [(ngModel)]="this.data.users_id_user">
        </div>
    </div>
      <p><strong>Estas por agregar una Empresa Nueva <span class="text-primary">Verifica</span> la informacion</strong></p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-danger" (click) ="create()">Ok</button>
  </div>
  `
})

export class ModalNuevaEmpresa {
  data: any;
  constructor(
    public modal: NgbActiveModal,
    private companyService: CompanyService,
    public router: Router) {
      this.data = new Company();
    }
    create() {
      this.data.role = 0;
      this.companyService.createCompany(this.data).subscribe((response) => {
        this.modal.close('Ok click');
      });
    }
}

// Editar Usuario
@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Editar Usuario</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div class="row">
        <div class="col-md-12">
                <label  >Nombre</label>
                <input name="first_name" inputmode="text" class="form-control" placeholder="Nombre" [(ngModel)]="this.data.first_name">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
                <label>Apellido</label>
                <input name="last_name" inputmode="text" class="form-control" placeholder="Apellido" [(ngModel)]="this.data.last_name">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
                <label>Direccion</label>
                <input name="direction" inputmode="text" class="form-control" placeholder="Direccion" [(ngModel)]="this.data.direction">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
                <label>Colonia</label>
                <input name="colony" inputmode="text" class="form-control" placeholder="Colonia"[(ngModel)]="this.data.colony">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
                <label>Codigo postal</label>
                <input name="cp" inputmode="text" class="form-control" placeholder="Codigo postal" [(ngModel)]="this.data.cp">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
                <label>Email</label>
                <input name="email" inputmode="text" class="form-control" placeholder="Email" [(ngModel)]="this.data.email">
        </div>
    </div>
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
  autofocus: ModalNuevaEmpresa,
  editar: ModalEditarEmpresa
};

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})

export class CompaniesComponent implements OnInit {
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
    this.getAllCompanies();
  }

  getAllCompanies() {
    this.companyService.getCompanies()
    .subscribe(
      (data) => { // Success
        this.companies = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  open(name: string, id?: number) {
    const modalRef = this._modalService.open(MODALS[name]);
    modalRef.componentInstance.fromParent = id;
  }

}

