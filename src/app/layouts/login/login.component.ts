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
    console.log(this.data);
    this.authService.login(this.data.email, this.data.password).subscribe((res) => {
      this.router.navigateByUrl('/dashboard');
    });
  }

}
