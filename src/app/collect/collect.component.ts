import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../_services/company/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../models/register_paiment';

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
  value: number;
  endMonth: any;
  endDay: any;
  actualMonth: any;
  actualDay: any;
  accept: boolean;
  reject: boolean;
  pagar: boolean;

  constructor(
    private toastr: ToastrService,
    private companyService: CompanyService,
    private router: Router,
  ) { }
  item: any;


  ngOnInit(): void {
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
      this.showNotification('top', 'right', 2);
      this.companyService.register_payment(data.purchase_units[0].amount.value, data.purchase_units[0].description, data.status, data.update_time.split('T')[0], this.company, this.idCompanyServ, data.id ).subscribe((response) => {
      });
      this.companyService.active_payment(this.company, this.id_service).subscribe((responsee) => {
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
    const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    this.companyService.register_payment(this.item.unit_amount.value, this.item.name, 'PENDING', date, this.company, this.idCompanyServ, this.id_company).subscribe((response) => {
      console.log(response);
    });
    this.companyService.active_payment(this.company, this.id_service).subscribe((responsee) => {
      console.log(responsee);
    });
  }
}
