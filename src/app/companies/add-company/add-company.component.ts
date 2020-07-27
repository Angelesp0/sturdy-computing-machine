import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../../../../gglobals-ionic/gglobals/src/app/models/company';
import { CompanyService } from './../../_services/company/company.service';
import { User } from '../../../../../gglobals-ionic/gglobals/src/app/models/user';
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
  name: any;
  select: any;
  last_name: any;
  service1: number;
  service2: number;
  service: any;
  todayDate: Date = new Date();




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
  constructor(
    private userService: UserService,
    private companyService: CompanyService,
    public router: Router,
    private formBuilder: FormBuilder
    ) {
      this.data = new Company();
      this.users = new User();
      this.service = new CompanyServices();
    }
    create() {
      console.log(this.data);
      this.data.status = 1;

      // console.log(this.data);
      this.companyService.createCompany(this.data).subscribe((response) => {
      const id_company = response['newInf']['company_id_company'];
      if (this.service1 == 1) {

        const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
        const endDate = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 2) + '-' + this.todayDate.getDate();

        this.service.company_id_company = id_company;
        this.service.services_id_service = "1";
        this.service.status = "1";
        this.service.start_date = date;
        this.service.end_date = endDate;

        this.companyService.company_has_service(this.service).subscribe((response) => {
          console.log(response);
        });
      }
      if (this.service2 == 1) {

        const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
        const endDate = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 2) + '-' + this.todayDate.getDate();

        this.service.company_id_company = id_company;
        this.service.services_id_service = "2";
        this.service.status = "1";
        this.service.start_date = date;
        this.service.end_date = endDate;

        this.companyService.company_has_service(this.service).subscribe((response) => {
          console.log(response);
        });
      }

      this.router.navigate(['generatepdf']);
      });
    }
    onSubmit() {
      console.log(this.data);
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerCompany.invalid) {
          return;
      }
      alert('Usuario Creado Exitosamente');
      this.create();
  }

  ngOnInit(): void {
  /* this.registerCompany = new FormGroup({
    company: new FormControl('', Validators.required),
    rfc: new FormControl('', Validators.required),
    users_id_user: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    direction: new FormControl('', Validators.required),
    colony: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    street3: new FormControl('', Validators.required),
    street1: new FormControl('', Validators.required),
    street2: new FormControl('', Validators.required),
    num_ext: new FormControl('', Validators.required),
    cp: new FormControl('', [Validators.required, Validators.minLength(5)]),
    tel: new FormControl('',  [Validators.required, Validators.minLength(10)]),
    contact_name: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required),
    first_name: new FormControl('', Validators.required),
    contact_tel: new FormControl('', [Validators.required, Validators.minLength(10)]),
    contact_email: new FormControl('', [Validators.required, Validators.email]),
    distribution: new FormControl('', Validators.required),
    scope_of_operations: new FormControl('', Validators.required),
    company_start: new FormControl('', Validators.required),
    sales_range: new FormControl('', Validators.required),
    main_activity: new FormControl('', Validators.required),
    activity_code: new FormControl('', Validators.required),
    employees: new FormControl('', Validators.required),
    female_employees: new FormControl('', Validators.required),
    attention_area: new FormControl('', Validators.required),
   });*/

    this.registerCompany = this.formBuilder.group({
      company: ['', Validators.required],
      rfc: ['', Validators.required],
      users_id_user: ['', Validators.required],

      state: ['', Validators.required],
      city: ['', Validators.required],
      direction: ['', Validators.required],
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
      first_name: ['', Validators.required],
      contact_tel: ['', [Validators.required, Validators.minLength(10)]],
      contact_email: ['', [Validators.required, Validators.email]],
      distribution: ['', Validators.required],
      scope_of_operations: ['', Validators.required],
      company_start: ['', Validators.required],
      sales_range: ['', Validators.required],
      main_activity: ['', Validators.required],
      activity_code: ['', Validators.required],
      employees: ['', [Validators.required, Validators.minLength(1)]],
      female_employees: ['', [Validators.required, Validators.minLength(1)]],
      attention_area: ['', Validators.required],
      type_street: ['', Validators.required],
    });

    this.userService.getUsers().subscribe((response) => {
      this.name = response;
     // const name_users = [];

      // tslint:disable-next-line: forin
      // for (const i in response) {
       // name_users.push(response[i].first_name);

      // }
      // this.name = Object.values(name_users);

    });
  }
  get f() { return this.registerCompany.controls; }


}
