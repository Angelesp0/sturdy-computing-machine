import { Component, OnInit, Type, Input  } from '@angular/core';
import { UserService } from './../_services/user/user.service';
import { User } from './../models/user';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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
    <div class="row">
        <div class="col-md-12">
                <label>Contraseña</label>
                <input name="password" inputmode="text" class="form-control" placeholder="Contraseña" [(ngModel)]="this.data.password">
        </div>
    </div>
      <p><strong>Estas por agregar un nuevo usuario <span class="text-primary">Verifica</span> la informacion</strong></p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-danger" (click) ="create()">Ok</button>
  </div>
  `
})
export class NgbdModalConfirmAutofocus {
  data: User;
  constructor(
    public modal: NgbActiveModal,
    private userService: UserService,
    public router: Router) {
      this.data = new User();
    }
    create() {
      this.data.role = 0;
      this.userService.createItem(this.data).subscribe((response) => {
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
export class UsersComponent implements OnInit {
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
  (click)="modal.close('Ok click')">Ok</button>`;
  users: any;
  data: any;

  constructor(
    private _modalService: NgbModal,
    private userService: UserService,
    ) {
      this.data = new User();
     }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  delete(id) {
    this.userService.deleteItem(id).subscribe(Response => {
      this.getAllStudents();
    });
  }
  open(name: string, id?: number) {
    const modalRef = this._modalService.open(MODALS[name]);
    modalRef.componentInstance.fromParent = id;
  }



}
