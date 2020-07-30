import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  Rif: any;
  Pf: any;
  constructor(private toastr: ToastrService) {}

  item: any;

  ngOnInit() {


    this.service();
    this.initConfig();
  }

  private service() {
    if (localStorage.getItem('Rif')) {
      // logged in so return true
      this.Rif = localStorage.getItem('Rif');
      this.item = {
        name: 'Servicio: RIF',
        quantity: '1',
        category: 'DIGITAL_GOODS',
        unit_amount: {
          currency_code: 'MXN',
          value: '400.00',
        }
      };
      return true;
  }
  if (localStorage.getItem('Pf')) {
    // logged in so return true
    this.Pf = localStorage.getItem('Pf');
    this.item = {
      name: 'Servicio: PF',
      quantity: '1',
      category: 'DIGITAL_GOODS',
      unit_amount: {
        currency_code: 'MXN',
        value: '20.00',
      }
    };
    return true;
  }
  }

  private initConfig(): void {

    this.payPalConfig = {
    currency: 'MXN',
    clientId: 'AdzB8j-AFKIKc074GT0S0jkkbcwCnouRtA3QgoVNOKEhIqB-yROQA6L4sfwgylkou0ZABoEz5CNrbTfm',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'MXN',
            value: '420.00',
            breakdown: {
              item_total: {
                currency_code: 'MXN',
                value: '420.00'
              }
            }
          },
          items: [
            {
              name: 'Servicio: PF',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'MXN',
                value: '20.00',
              }
            },
            {
              name: 'Servicio: Rif',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'MXN',
                value: '400.00',
              }
            }
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
      console.log('onClientAuthorization: probablemente debería informar a su servidor sobre la transacción completada en este momento', data);
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
      this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
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

}
