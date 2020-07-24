import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../../../../gglobals-ionic/gglobals/src/app/models/company';
import { CompanyService } from './../../_services/company/company.service';
import { User } from '../../../../../gglobals-ionic/gglobals/src/app/models/user';
import { UserService } from '../../_services/user/user.service';
import { CompanyServices } from './../../models/company_services';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
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
    ) {
      this.data = new Company();
      this.users = new User();
      this.service = new CompanyServices();
    }
    create() {
      console.log(this.data.users_id_user);
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

  ngOnInit(): void {

    this.userService.getUsers().subscribe((response) => {
      this.data = response;
     // const name_users = [];

      // tslint:disable-next-line: forin
      // for (const i in response) {
       // name_users.push(response[i].first_name);

      // }
      // this.name = Object.values(name_users);

    });
  }

}
