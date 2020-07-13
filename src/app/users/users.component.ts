import { Component, OnInit } from '@angular/core';
import { UserService } from './../_services/user/user.service';
import { User } from './../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  delete(id) {
    this.userService.deleteItem(id).subscribe(Response => {
      this.getAllStudents();
    });
  }


}
