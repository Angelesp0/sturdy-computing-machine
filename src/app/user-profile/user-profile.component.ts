import { Component, OnInit } from '@angular/core';
import { User } from './../models/user';
import { UserService } from './../_services/user/user.service';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id: any;
  data: any;
  selectedFile: File;
  imgs: any;
  hola = 'hola';
  constructor(
    private http: HttpClient,
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.data = new User();

  }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.getUser(this.id.user.id_user).subscribe(response => {
      this.data  = response;
    });
    this.userService.getImg(this.id).subscribe(res => {
      // const img = JSON.stringify(res[0].nombre);
      // this.imgs = img.replace(/['"]+/g, '');
    });
  }

}
