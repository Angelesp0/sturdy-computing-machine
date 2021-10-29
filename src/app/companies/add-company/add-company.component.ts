import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Company } from '../../../../../gglobals-ionic/gglobals/src/app/models/company';
import { Company } from '../../models/company';
import { CompanyService } from './../../_services/company/company.service';
// import { User } from '../../../../../gglobals-ionic/gglobals/src/app/models/user';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';


import { UserService } from '../../_services/user/user.service';
import { CompanyServices } from './../../models/company_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  registerCompany: FormGroup;
  submitted = false;
  data: any;
  users: any;
  executive: any;
  ejecutivo: any;
  name: any;
  select: any;
  last_name: any;
  service1: number;
  service2: number;
  service: any;
  todayDate: Date = new Date();
  id_company: number;

  Tipos_de_Colonias: string [] = [
    "Aeropuerto","Ampliacion","Barrio", "Canton",
    "Ciudad","Ciudad industrial","Colonia",
    "Condominio","Conjunto habitacional","Corredor industrial",
    "Coto","Cuartel","Ejido","Ex acienda","Fraccion","Fraccionamiento"
    ,"Granja","Hacienda","Ingenio","Manzana","Paraje","Parque industrial"
    ,"Privada","Prolongacion","Pueblo","Puerto","Rancheria" ,"Rancho"
    ,"Region","Recidencial","Rinconada","Seccion", "Sector","Super manzana"
    ,"Unidad","Unidad habitacional","Villa","Zona federal","Zona naval"
    ,"Zona industrial","Zona militar"
  ];
  Tipos_de_Vialidades: string [] = [
    "Ampliacion","Andador","Avenida", "Boulevard",
    "Calle","Callejon","Calzada",
    "Cerrada","Circuito","Circunvalacion",
    "Continuacion","Corredor","Diagonal","Eje vial","Peatonal","Periferico"
    ,"Privada","Prolongacion","Retorno","viaducto","Carretera" ,"Camino"
  ];
  Tipos_de_Instalaciones: string [] = [
    "Fijas","Semifijas","La actividad se desarrolla en vivienda",
  ];
  Rango_Ventas: string [] = [
    "0 a 100 mil pesos","101 a 200 mil pesos","201 a 500 mil pesos", "501 a 1000 mil pesos",
    "1001 a 3000 mil pesos","3001 a 6000 mil pesos","6001 a 12000 mil pesos",
    "12001 a 30000 mil pesos","30001 o más miles de pesos"
  ];
  Ambito_de_Operaciones: string [] = [
    "Local","Estatal","Nacional", "Internacional"
  ];
  Tipo_de_Distribucion: string [] = [
    "Única","Mátriz","Sucursal"
  ];
  Areas_de_Atencion: string [] = [
    "Financiamiento","Comercializacion","Gestion Empresarial",
    "Capacitacion y consultoria", "innovacion y desarrollo tecnologico"
  ];
  Prestamos: string [] = [
    "Antes de abrir","Despues de abrir","Ambas",
    "Ninguna"
  ];
  ejecutive: any;
  currentUser: any;


  constructor(
    private userService: UserService,
    private companyService: CompanyService,
    public router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) {
      this.data = new Company();
      this.users = new User();
      this.service = new CompanyServices();
      this.ejecutivo = new Company();
    }

    ////////////////////////////// Registra algunos datos en la BD //////////////////////////////

    create() {
      if (this.ejecutive === 2) {
        localStorage.setItem('ejecutivo', this.currentUser.user.id_user);
      } else {
        localStorage.setItem('ejecutivo', this.ejecutivo.users_id_user);
      }
      this.data.status = 1;
      this.companyService.createCompany(this.data).subscribe((response) => {
      const id_company = response['newInf']['company_id_company'];
      localStorage.setItem('id_company', id_company);
      this.id_company = id_company;

      if (this.service1 == 1) {
        const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
        let endDate;
        if (this.todayDate.getDate() === 31) {
          endDate = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 2) + '-' + (this.todayDate.getDate() - 1);
        } else {
          endDate = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 2) + '-' + this.todayDate.getDate();
        }

        this.service.company_id_company = id_company;
        this.service.services_id_service = "1";
        this.service.status = "0";
        this.service.start_date = date;
        this.service.end_date = endDate;

        this.companyService.company_has_service(this.service).subscribe((response) => {
          this.showNotification('top', 'right', 1);
          localStorage.setItem('pay', response['id']);
          console.log(response);
          localStorage.setItem('Rif', 'True');
        });
      }
      if (this.service1 == 0) {

        const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
        let endDate;
        if (this.todayDate.getDate() === 31) {
          endDate = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 2) + '-' + (this.todayDate.getDate() - 1);
        } else {
          endDate = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 2) + '-' + this.todayDate.getDate();
        }
        this.service.company_id_company = id_company;
        this.service.services_id_service = "2";
        this.service.status = "0";
        this.service.start_date = date;
        this.service.end_date = endDate;

        this.companyService.company_has_service(this.service).subscribe((response) => {
          this.showNotification('top', 'right', 1);

          localStorage.setItem('pay', response['id']);
          console.log(response);
          localStorage.setItem('Pf', 'True');
        });
      }

      this.router.navigate([`/add-media/${this.id_company}`]);
      });
    }
    onSubmit() {
      this.submitted = true;
      console.log('submit');
      // stop here if form is invalid
      if (this.registerCompany.invalid) {
        console.log('invalid ' + this.registerCompany.invalid);
        this.showNotification('top', 'right', 2);
          return;
      } else {
        console.log('valid');
        this.create();
      }
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser.user.role_id_role === 2) {
      this.ejecutive = 2;
    }

    this.registerCompany = this.formBuilder.group({
      company: ['', Validators.required],
      razon: ['', Validators.required],
      rfc: ['', Validators.required],
      // first_name: ['', Validators.required],
      users_id_user: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      colony: ['', Validators.required],
      street: ['', Validators.required],
      street3: ['', Validators.required],
      street1: ['', Validators.required],
      street2: ['', Validators.required],
      num_ext: ['', Validators.required],
      cp: ['', [Validators.required, Validators.minLength(5)]],
      tel: ['', [Validators.required, Validators.minLength(10)]],
      contact_name: ['', Validators.required],
      job: ['', Validators.required],
      contact_tel: ['', [Validators.required, Validators.minLength(10)]],
      contact_email: ['', [Validators.required, Validators.email]],
      distribution: ['', Validators.required],
      scope_of_operations: ['', Validators.required],
      company_start: ['', Validators.required],
      sales_range: ['', Validators.required],
      main_activity: ['', Validators.required],
      employees: ['', [Validators.required, Validators.minLength(1)]],
      female_employees: ['', [Validators.required, Validators.minLength(1)]],
      executive: ['', Validators.required],
    });

    this.userService.getUsers().subscribe((response) => this.name = response);
    this.userService.getExecutive().subscribe((response) => this.executive = response);
  }

  showNotification(from, align, notification) {


    switch (notification) {
      case 1:
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Empresa registrada' , '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: 'alert alert-info alert-with-icon',
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 2:
      this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Datos incompletos', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: 'alert alert-warning alert-with-icon',
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 3:
      this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Error al crear la empresa', '', {
         timeOut: 8000,
         enableHtml: true,
         closeButton: true,
         toastClass: 'alert alert-danger alert-with-icon',
         positionClass: 'toast-' + from + '-' +  align
       });
       break;
      default:
      break;
    }
  }

  get f() { return this.registerCompany.controls; }


}
