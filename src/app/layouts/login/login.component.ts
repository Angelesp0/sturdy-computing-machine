import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../../_services/user/user.service';
import { User } from './../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: User;


  constructor( public router: Router, private  authService: UserService) { 
    this.data = new User();

  }

  ngOnInit(): void {
  }
  ingresar() {
    console.log('hola')
    this.authService.login(this.data.email, this.data.password).subscribe((res) => {
      console.log(res);
      console.log(this.data.email, ' + ', this.data.password);
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

}
