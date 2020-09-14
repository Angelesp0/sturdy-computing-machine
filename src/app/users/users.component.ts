import { Component, OnInit, Type, Input, OnDestroy  } from '@angular/core';
import { UserService } from './../_services/user/user.service';
import { User } from './../models/user';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Subject  } from 'rxjs';
import { map  } from 'rxjs/operators';
import { Response } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './../_helpers/must-match.validator';

// Agregar Usuario
@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Agregar Usuario Nuevo</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
  <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <div class="col-md-12" class="form-group">
          <label>Nombre(s) <strong><span class="text-danger">*</span></strong></label>
          <input formControlName="first_name" name="first_name" inputmode="text" class="form-control" placeholder="Nombre" [(ngModel)]="this.data.first_name" [ngClass]="{ 'is-invalid': submitted && f.first_name.errors }" >
          <div *ngIf="submitted && f.first_name.errors" class="invalid-feedback">
              <div *ngIf="f.first_name.errors.required">First Name is required</div>
          </div>
        </div>
        <div class="col-md-12" class="form-group">
          <label>Apellido(s) <strong><span class="text-danger">*</span></strong></label>
          <input formControlName="last_name" name="last_name" inputmode="text" class="form-control" placeholder="Apellido" [(ngModel)]="this.data.last_name" [ngClass]="{ 'is-invalid': submitted && f.last_name.errors }">
          <div *ngIf="submitted && f.last_name.errors" class="invalid-feedback">
              <div *ngIf="f.last_name.errors.required">Apellido is required</div>
          </div>
        </div>
        <div class="col-md-12" class="form-group">
          <label>Direccion <strong><span class="text-danger">*</span></strong></label>
          <input formControlName="direction" name="direction" inputmode="text" class="form-control" placeholder="Direccion" [(ngModel)]="this.data.direction" [ngClass]="{ 'is-invalid': submitted && f.direction.errors }">
          <div *ngIf="submitted && f.direction.errors" class="invalid-feedback">
              <div *ngIf="f.direction.errors.required">Direccion is required</div>
          </div>
        </div>
        <div class="col-md-12" class="form-group">
          <label>Colonia <strong><span class="text-danger">*</span></strong></label>
          <input formControlName="colony" name="colony" inputmode="text" class="form-control" placeholder="Colonia"[(ngModel)]="this.data.colony" [ngClass]="{ 'is-invalid': submitted && f.colony.errors }">
          <div *ngIf="submitted && f.colony.errors" class="invalid-feedback">
              <div *ngIf="f.colony.errors.required">Colonia is required</div>
          </div>
        </div>
        <div class="col-md-12" class="form-group">
          <label>Codigo postal <strong><span class="text-danger">*</span></strong></label>
          <input formControlName="cp" name="cp" inputmode="text" class="form-control" placeholder="Codigo postal" [(ngModel)]="this.data.cp" [ngClass]="{ 'is-invalid': submitted && f.cp.errors }">
          <div *ngIf="submitted && f.cp.errors" class="invalid-feedback">
              <div *ngIf="f.cp.errors.required">Codigo Postal is required</div>
              <div *ngIf="f.cp.errors.minlength">Codigo Postal must be at least 5 characters</div>
          </div>
        </div>
        <!--
          <div class="col-md-12" class="form-group">
          <label>Contraseña</label>
          <input formControlName="password" name="password" inputmode="text" class="form-control" placeholder="Contraseña" [(ngModel)]="this.data.password" [ngClass]="{ 'is-invalid': submitted && f.password.errors }"  >
          <div *ngIf="submitted && f.password.errors" class="invalid-feedback">
            <div *ngIf="f.password.errors.required">Contraseña is required</div>
            <div *ngIf="f.password.errors.minlength">Contraseña must be at least 6 characters</div>
          </div>
          </div>
        -->
        <div class="col-md-12" class="form-group">
          <label>Email</label>
          <input formControlName="email" name="email" inputmode="text" class="form-control" placeholder="Email" [(ngModel)]="this.data.email">
        </div>
      <p><strong>Estas por agregar un nuevo usuario <span class="text-primary">Verifica</span> la informacion</strong></p>
      <div class="form-group">
        <button type="submit" ngbAutofocus class="btn btn-danger" (click)="create()">Ok</button>
      </div>
    </form>
  </div>
  `
})
export class NgbdModalConfirmAutofocus implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  data: User;
  constructor(
    public modal: NgbActiveModal,
    private userService: UserService,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.data = new User();
    }
    create() {
      const espacio = " ";
      const arrayDeCadenas = this.data.last_name.split(espacio);

      const nombre  = this.data.first_name.slice(0, 2).toUpperCase();
      const apellido = (arrayDeCadenas)[0].toUpperCase().slice(0, 2);
      const apellido2 = (arrayDeCadenas[1]).toUpperCase().slice(0, 2);

      const nombre1  = this.data.first_name.slice(0, 1).toUpperCase();
      const apellido3 = arrayDeCadenas[0].toUpperCase();
      const apellido4 = arrayDeCadenas[1].toUpperCase().slice(0, 1);
      
      this.data.password = 'GG' + nombre + apellido + apellido2;
      this.data.role = 0;
      this.data.username = nombre1 + apellido3 + apellido4;
      this.userService.createItem(this.data).subscribe((response) => {
        this.modal.close('Ok click');
      });
    }
    onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      alert('Usuario Creado Exitosamente');
      this.create();
  }
    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        direction: ['', Validators.required],
        colony: ['', Validators.required],
        cp: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password:  ['', [Validators.required, Validators.minLength(6)]],
      });
  }
  get f() { return this.registerForm.controls; }

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
                <label>Nombre</label>
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
export class ModalEditar {
  @Input() fromParent;
  data: any;
  constructor(
    public modal: NgbActiveModal,
    private userService: UserService,
    public router: Router) {
      this.data = new User();
    }
    ngOnInit() {
      console.log(this.fromParent);
      this.userService.getUser(this.fromParent).subscribe(response => {
        this.data = response;
      });
    }
    update() {
      this.userService.updateItem(this.fromParent, this.data).subscribe(response => {
        this.data = response;
        this.modal.close('Ok click');
      });
    }
}

const MODALS: {[name: string]: Type<any>} = {
  autofocus: NgbdModalConfirmAutofocus,
  editar: ModalEditar
};

// Modulo Principal
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
  (click)="modal.close('Ok click')">Ok</button>`;
  users: any;
  data: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private _modalService: NgbModal,
    private userService: UserService,
    public router: Router
    ) {
      this.data = new User();
     }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.userService.getUsers().pipe(map(this.extractData)).subscribe(response => {
      this.dtTrigger.next();
      this.users  = response;
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

  delete(id) {
    this.userService.deleteItem(id).subscribe(Response => {
    });
  }
  open(name: string, id?: number) {
    const modalRef = this._modalService.open(MODALS[name]);
    modalRef.componentInstance.fromParent = id;
  }



}
