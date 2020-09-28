import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../_services/company/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../models/register_paiment';
import { AdminService } from '../_services/admin/admin.service';
import * as nl from 'numeros_a_letras';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.css']
})
export class CollectComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  companies: any;
  company: any;
  services: any;
  service: any;
  todayDate: Date = new Date();
  id_company: number;
  id_service: number;
  idCompanyServ: number;

  name: string;
  value: any;
  endMonth: any;
  endDay: any;
  actualMonth: any;
  actualDay: any;
  accept: boolean;
  reject: boolean;
  pagar: boolean;

  firmas: any;
  mario: any;
  yadira: any;
  contrato: any;

  recibo: any;
  inf: any;
  id: number;
  reciboName: any;
  methodPayment: any;
  id_payment: any;


  constructor(
    private toastr: ToastrService,
    private companyService: CompanyService,
    private router: Router,
    private adminService: AdminService,
  ) { }
  item: any;


  async ngOnInit() {
    this.firmas = await this.adminService.getFirm().toPromise();
    console.log(this.firmas);
    this.mario = this.firmas[0]['name'];
    this.yadira = this.firmas[1]['name'];
    const contrato1 = await this.adminService.getLastContract().toPromise();
    this.contrato = contrato1[0]['id_files'];
    this.recibo = await this.adminService.getLastReceipt().toPromise();
    // conseguir id de la empresa
    this.methodPayment = 'EFECTIVO'; // automatico


    this.companyService.getCompanies().subscribe(response => this.companies = response);
    this.initConfig();

  }

   payment(newValue) {
      // logged in so return true
      this.item = {
        name: this.name,
        quantity: '1',
        category: 'DIGITAL_GOODS',
        unit_amount: {
          currency_code: 'MXN',
          value: this.value,
        }
      };
  }

  private initConfig(): void {
    const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    this.payPalConfig = {
    currency: 'MXN',
    clientId: 'AdzB8j-AFKIKc074GT0S0jkkbcwCnouRtA3QgoVNOKEhIqB-yROQA6L4sfwgylkou0ZABoEz5CNrbTfm',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'MXN',
            value: this.item.unit_amount.value,
            breakdown: {
              item_total: {
                currency_code: 'MXN',
                value:  this.item.unit_amount.value
              }
            }
          },
          items: [
            this.item
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      this.showNotification('top', 'right', 1);
      console.log('onApprove: la transacción se aprobó, pero no se autorizó', data, actions);
      actions.order.get().then(details => {
        console.log('onApprove: puede obtener todos los detalles del pedido en onApprove:', details);
      });
    },
    onClientAuthorization: (data) => {
       this.adminService.getInfContract(this.company).subscribe(response => {
         this.inf = response
         console.log(response);
        });

      this.showNotification('top', 'right', 2);
      this.companyService.register_payment(data.purchase_units[0].amount.value, data.purchase_units[0].description, data.status, data.update_time.split('T')[0], this.company, this.idCompanyServ, data.id ).subscribe((response) => {
        this.id_payment = response['id_table'];
      });
      this.companyService.active_payment(this.company, this.id_service).subscribe((responsee) => {
        this.receipt('false', 'post');
        console.log(responsee);
      });
      // this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      this.showNotification('top', 'right', 3);
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      this.showNotification('top', 'right', 4);
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }

  showNotification(from, align, notification) {


    switch (notification) {
      case 1:
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> La transacción se aprobó, pero no se autorizó.', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: 'alert alert-info alert-with-icon',
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 2:
      this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span>La transacción se aprobó.', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: 'alert alert-success alert-with-icon',
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 3:
      this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> El Pago se Cancelo, Favor de re-intentar', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: 'alert alert-warning alert-with-icon',
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 4:
      this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
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

  getService(newValue) {
    this.companyService.getcompanyHasService(newValue).subscribe(response => {
      console.log(response);
       this.services = Array.of(response);
       this.name = response['name_service'];
       this.value = response['value'];
       this.id_service = response['id_service'];
       this.idCompanyServ = response['id_companys'];

       const datePayment = new Date(response['end_date']);
       this.endMonth = datePayment.getMonth() + 1;
       this.endDay = datePayment.getDate();
       this.abono();
      });
  }

  abono() {
    const actual = new Date(Date.now());
    this.actualMonth = actual.getMonth() + 1;
    this.actualDay = actual.getDate();

    if (this.endMonth === this.actualMonth) {
        if (this.actualDay >=  12) {
          // console.log('mes igual, dia actual mayor al 12');
          this.reject = true;
          this.pagar = false;
          this.accept = false;
        } else {
          // console.log('mes igual, dia actual menor al 12');
          this.pagar = true;
          this.accept = false;
          this.reject = false;
        }
    } else {
      if (this.endMonth > this.actualMonth) {
        // console.log('mes final, mayor al actual');
        this.accept = true;
        this.reject = false;
        this.pagar = false;
      } else {
        // console.log('mes final, menor al actual');
        this.reject = true;
        this.pagar = false;
        this.accept = false;
      }
    }
  }

  cash() {
    this.adminService.getInfContract(this.company).subscribe(response => {
      this.inf = response
      console.log(response);
     });
    const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    this.companyService.register_payment(this.item.unit_amount.value, this.item.name, 'PENDING', date, this.company, this.idCompanyServ, this.id_company).subscribe((response) => {
      console.log(response);
      this.id_payment = response['id_table'];

    });
    this.companyService.active_payment(this.company, this.id_service).subscribe((responsee) => {
      console.log(responsee);
      this.receipt('false', 'post');
    });
  }

  receipt(download?: any, post?: any) {

    const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    const endDate = this.todayDate.getFullYear() + 1 + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    const cliente = new Image(); // HTML5 Constructor
    const prestador = new Image();
    const testigo2 = new Image();
    const logo = new Image();
    const columns = [['Año', 'Mes', 'Total',  'Estado']];
    const data = [[
    this.todayDate.getFullYear(), this.todayDate.getMonth() + 1, this.value, "PAGADO"]];
    const value2: number = +this.value;
    const value3 = nl(value2);
    const a = this.value; // valor en pesos

    const b = parseFloat(this.value);
    const c: number = a-b;
    let service: any;
    let identificador: any;
    console.log(a);


    // error con el this.info

    if (this.inf.id_service == 1) {
       service = 'RCR-' + (this.recibo[0]['id_receipt'] + 1);
       identificador = 'CR-' + this.contrato;
       console.log(identificador);
    }
    if (this.inf.id_service == 2) {
      service = 'RCE-' + (this.recibo[0]['id_receipt'] + 1);
      identificador = 'CE-' + this.contrato;
      console.log(identificador);
    }

    cliente.src = `http://192.168.2.18:3000/files/${this.inf.nombre}`;
    cliente.alt = 'alt';

    prestador.src = `http://192.168.2.18:3000/files/${this.yadira}`;
    prestador.alt = 'alt';

    testigo2.src = `http://192.168.2.18:3000/files/${this.mario}`;
    testigo2.alt = 'alt';

    logo.src = `http://192.168.2.18:3000/files/Logo.png`;
    logo.alt = 'alt';
    console.log(this.inf.nombre)
    console.log(this.yadira)
    console.log(this.inf)



    const doc = new jsPDF('p', 'pt', 'letter');
    doc.setFont('Arial');
    // doc.setFontSize(11.5);
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.setFontSize(10);

    doc.text('E-Mail:  servicioconta@gglobals.com.mx ',190, 40, );
    doc.text('Gestoria Empresarial Global Service, S.C.', 390, 40, );
    doc.text('RFC :          GEG-110121-U13', 390, 50, );


    doc.text('Telefono: 614 415 00 74', 190, 50, );
    doc.text('Direccion: Av. Cantera 9301 Col. Las Misiones', 390, 60, );

    doc.text('Sitio Web: Gglobals.com.mx', 190, 60, );
    doc.text('Edificio Corporativo: Cantera V, Piso 3', 390, 70, );

    doc.text('__________________________________________________________________________________________', 85, 75, );


    doc.setFontSize(16);
    doc.setFont('helvetica',"bold");
    // doc.setFontType();
    doc.text('R E C I B O   D E   P A G O', 210, 120);
    doc.setFont('Arial',"bold");

// ======================================================================================================================= //
    doc.setFontSize(11.5);
    doc.text(`Recibimos de :                                                                                                                  No. recibo :`, 40, 150,  );
    doc.text(`                            _______________________________________________________                      _________ `, 40, 153,  );
    doc.setFont('Arial',"normal");
    // doc.setFontType("normal")
    doc.text(` ${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()} `, 200, 148, );
    doc.text(` ${service}`, 500, 148, );

    
// ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`La cantidad de :`,40, 175,  );
    doc.text(`                              __________________________________________________________________________ `, 40, 178);
    //doc.setFontType("normal")
    doc.setFont('Arial',"normal");
    doc.text(` $${(a)}       ${(value3).toUpperCase()} PESOS ${c}/100 MXN`, 200, 173, );
// ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");
    doc.text(`Concepto :                                         Forma de pago :                                              RFC :`, 40, 200,  );
    doc.text(`                    __________________                                  _____________________              ________________`, 40, 203,  );
    // doc.setFontType("normal");
    doc.setFont('Arial',"normal");

    doc.text(` MENSUALIDAD                                         ${this.methodPayment}`, 105, 198, );
    doc.text(`${(this.inf.rfc).toUpperCase()}`, 470, 198, );

    // ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`Razon social :`, 40, 225,  );
    doc.text(`                          ____________________________________________________________________________ `, 40, 228,  );
    // doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    doc.text(` ${(this.inf.main_activity).toUpperCase()} `, 150, 223, );
    // ======================================================================================================================= //
    //doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`Actividad :                                                           Calle :`, 40, 250,  );
    doc.text(`                      ___________________________                ___________________________________________ `, 40, 253,  );
    // doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    doc.text(`${(this.inf.main_activity).toUpperCase()}`, 130, 248, );
    doc.text(`${(this.inf.street).toUpperCase()}`, 310, 248, );

    // ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`Numero :                  Colonia :                                                                                                Cp :`, 40, 275,  );
    doc.text(`                  _______                  ______________________________________________            ____________ `, 40, 278,  );
    // doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    doc.text(` ${this.inf.num_ext}`, 95, 273, );
    doc.text(`${(this.inf.colony).toUpperCase()}`, 200, 273, );
    doc.text(`${this.inf.cp}`, 500, 273, );


    // ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`Entre calles :                                                                               Y :`, 40, 300,  );
    doc.text(`                         _____________________________________         ___________________________________ `, 40, 303,  );
    // doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    doc.text(`${(this.inf.street).toUpperCase()}`, 110, 298, );
    doc.text(`${(this.inf.street).toUpperCase()}`, 350, 298, );

    // ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`Calle posterior :                                                                                                 No. contrato :`, 40, 325,  );
    doc.text(`                              ______________________________________________                            ______________ `, 40, 328,  );
    // doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    doc.text(` ${(this.inf.street).toUpperCase()}`, 120, 323, );
    doc.text(`${identificador}`, 490, 323, );

    // ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`Fecha de pago :                                                                       `, 40, 350,  );
    doc.text(`                            _____________ `, 40, 353,  );
    // doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    // ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`_____________________________________ `, 200, 395,  );
    //doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    doc.text(`            GESTORIA EMPRESARIAL `, 210, 415,  );
    doc.text(`               GLOBAL SERVICE S.C`, 210, 430,  );
    doc.addImage(cliente, 'PNG', 243, 350, 130, 45);
    doc.text(` ${date}                                                 `, 130, 348, );
    // ======================================================================================================================= //
    autoTable(doc, {
      head: columns,
      body: data,
      margin:  { top: 470 },
      styles: { halign: 'center' },
      theme: 'grid'
 });
    // ======================================================================================================================= //
    doc.setFontSize(11.5);
    doc.text(`Aviso de Privacidad Simplificado` ,240, 620,  {maxWidth: 540, align: 'justify'});
    doc.setFontSize(9);
    doc.text(`Gestoria Empresarial Global Service SC, implementa las medidas de seguridad y mecanismos tecnicos necesarios para la proteccion de datos personales y sencibles, procurando siempre la integridad de dichos datos evitando asi el daño, perdida, o el uso, acceso a tratamiento no autorizado por los titulares, la vulnerabilidad surgida por la alteracion de los mismos sera informada por Gestoria Empresarial Global Service SC, en la brevedad posible a los titulares, a fin de que se puedan tomar medidas pertinentes a la defensa de sus derechos tal como lo señala el articulo 20 de la ley, Gestoria Empresarial Global Service SC, por consucto de sus representantes legales, directivos o personal a cargo se compromete a guardar confidencialidad respuecto a los datos de los titulares, confidencialidad que subsistira aun despues de terminada la relacion con Gestoria Empresarial Global Service SC, teniendo asi prohinido el acceso de personas no autorizadas y utilizar los datos personales de los titulares para los fines distintos establecidos de manera contractual o a los establecidos en el presente aviso de privacidad, para visualizar nuestro abiso de privacidad vigente, visitar la pagina de https://gglobals.com.mx/aviso-de-privacidad/` ,40, 640,  {maxWidth: 540, align: 'justify'});


    if (download == 'true') {
      if (this.inf.name_service === 'Contabilidad Rif') {
        doc.save('RCR.pdf');
      } else {
        doc.save('RCE.pdf');
      }
    } 

    if (post) {
      console.log(post);


      this.adminService.postReceipt(this.company, identificador, date, this.id_payment, doc.output('blob')).subscribe(response => {
        this.adminService.getReceiptById(response['id_receipt']).subscribe( response => {
          console.log(response);
        });
      });
    }
  }

  openPD() {
    this.receipt('true');
  }
}
