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
    this.authService.login(this.data.email, this.data.password).subscribe((res) => {
      const data = res;
      switch (data['user']['role_id_role']) {
        case 1:
          this.router.navigateByUrl('/dashboard');

          break;
        case 2:
          this.router.navigateByUrl('/material');

          break;
        case 3:
          this.router.navigateByUrl('/material');
          break;

        default:
          break;
      }
    });
  }

}
