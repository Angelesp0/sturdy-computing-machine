import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../../_services/user/user.service';
import { User } from './../../models/user';
import { ToastrService } from 'ngx-toastr';
import { ShowNotificationsService } from '../../_helpers/show-notifications';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: User;


  constructor(
    private toastr: ToastrService,
    public router: Router,
    private  authService: UserService,
    private showNotifications: ShowNotificationsService
    ) {
    this.data = new User();
  }

  ngOnInit(): void {
  }
  ingresar() {
    console.log('hola');
    this.authService.login(this.data.email, this.data.password).subscribe((res) => {
      console.log(res.erro);
      if (res.erro) {
        this.showNotification('top', 'right', 2);
      } else {
        this.showNotification('top', 'right', 1);
      }
      const data = res;
      console.log(data['user'].role_id_role);
      switch (data['user'].role_id_role) {
        case 1:
          this.router.navigateByUrl('/dashboard');

          break;
        case 2:
          this.router.navigateByUrl('/material');

          break;
        case 3:
          this.router.navigateByUrl('/account');
          break;

        default:
          break;
      }
    });
  }

  showNotification(from, align, notification) {


    switch (notification) {
      case 1:
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Ingresando...', '', {
         timeOut: 1000,
         closeButton: true,
         enableHtml: true,
         toastClass: 'alert alert-info alert-with-icon',
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 2:
      this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Usuario o contraseña incorrecto', '', {
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
