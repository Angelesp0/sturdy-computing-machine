import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user/user.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class AccountComponent implements OnInit {
  public id_user: any;
  public currentUser: any;
  public companies: any;
  public selected: any;
  public payments: any;

  

  constructor(
    public userService: UserService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(x => this.currentUser = x);

    this.id_user = this.currentUser['user'].id_user;
    console.log(this.id_user);
    this.userService.getCompaniesByUserId(this.id_user).subscribe(response => {
      this.companies = response;
      console.log(this.companies);
    });
  }

  open(content, data) {
    this.selected = data;
    console.log(this.selected);
    this.userService.getPaymentsByCompanyId(this.selected['id_company']).subscribe(response => {
      this.payments = response;
      console.log(this.payments);
    });
    this.modalService.open(content, { size: 'lg' });

  }
  Confirmar() {
  }

}
