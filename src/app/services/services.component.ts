import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from './../_services/admin/admin.service';
import { Service } from '../../../../gglobals-ionic/gglobals/src/app/models/service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject  } from 'rxjs';
import { map  } from 'rxjs/operators';
import { Response } from '@angular/http';

// Agregar Usuario
@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Agregar un Servicio Nuevo</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div class="row">
        <div class="col-md-12">
                <label>Nombre del Servicio</label>
                <input name="first_name" inputmode="text" class="form-control" placeholder="Nombre" [(ngModel)]="this.data.name_service">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
                <label>Descripcion del servicio</label>
                <input name="last_name" inputmode="text" class="form-control"placeholder="Descripcion" [(ngModel)]="this.data.desc_service">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
                <label>Precio</label>
                <input name="direction" inputmode="numeric" class="form-control" placeholder="$" [(ngModel)]="this.data.price">
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-md-12">
                <input type="file" (change)="onFileChanged($event)" #fileInput>
                </div>
    </div>
      <p><strong>Estas por agregar un Servicio nuevo <span class="text-primary">Verifica</span> la informacion</strong></p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-danger" (click)="onUpload()">Ok</button>
  </div>
  `
})
export class ModalNuevoServicio {
  data: Service;
  selectedFile: File;

  constructor(
    public modal: NgbActiveModal,
    private adminService: AdminService,
    public router: Router) {
      this.data = new Service();
    }

    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    }
    onUpload() {
      this.adminService.createItem(this.data, this.selectedFile).subscribe((response) => {
        this.modal.close('Ok click');
      });
    }
}

// Editar Usuario
@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Editar Servicio</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div class="row">
        <div class="col-md-12">
                <label>Nombre del servicio</label>
                <input name="first_name" inputmode="text" class="form-control" placeholder="Nombre" [(ngModel)]="this.data.name_service">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
                <label>Descripcion del servicio</label>
                <input name="last_name" inputmode="text" class="form-control" placeholder="Apellido" [(ngModel)]="this.data.desc_service">
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
                <label>Precio</label>
                <input name="direction" inputmode="numeric" class="form-control" placeholder="Direccion" [(ngModel)]="this.data.price">
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
export class ModalEditarServicio {
  @Input() fromParent;
  data: any;
  constructor(
    public modal: NgbActiveModal,
    private adminService: AdminService,
    public router: Router) {
      this.data = new Service();
    }
    ngOnInit() {
      console.log(this.fromParent);
      this.adminService.getService(this.fromParent).subscribe(response => {
        this.data = response;
      });
    }
    update() {
      this.adminService.updateService(this.fromParent, this.data).subscribe(response => {
        this.data = response;
        this.modal.close('Ok click');
      });
    }
}

const MODALS: {[name: string]: Type<any>} = {
  autofocus: ModalNuevoServicio,
  editar: ModalEditarServicio
};


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id: number;
  services: any;
  constructor(
    private _modalService: NgbModal,
    public adminService: AdminService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.adminService.getServices().pipe(map(this.extractData)).subscribe(response => {
      this.dtTrigger.next();
      this.services  = response;
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
