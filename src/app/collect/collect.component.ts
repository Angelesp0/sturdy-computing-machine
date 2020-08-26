import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../_services/company/company.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  id_payment: any;
  totalValue: any;
  id_company: number;
  id_service: number;


  constructor(
    private toastr: ToastrService,
    private companyService: CompanyService,
    private router: Router,
  ) { }
  item: any;


  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(response => this.companies = response);
    //this.service();
    this.initConfig();
  }

  /*private service() {
      // logged in so return true
      this.item = {
        name: 'Servicio: RIF',
        quantity: '1',
        category: 'DIGITAL_GOODS',
        unit_amount: {
          currency_code: 'MXN',
          value: '350.00',
        }
      };
      this.id_service = 1;
  }*/

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
      console.log(data);
      this.showNotification('top', 'right', 2);
      this.companyService.register_payment(data.purchase_units[0].amount.value, data.purchase_units[0].description, data.status, data.update_time.split('T')[0], this.id_company, data.id ).subscribe((response) => {
      });
      this.companyService.active_payment(this.id_company, this.id_service).subscribe((responsee) => {
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
      });
  }



}
