import { Component, OnInit } from '@angular/core';
import { Subject  } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services/user/user.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map  } from 'rxjs/operators';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  currentUser: any;
  id_role: any;
  name: any;
  selected: any;
  users: any;
  id_payment: number;

  constructor(
    public userService: UserService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.userService.getVerification().pipe(map(this.extractData)).subscribe(response => {
      this.dtTrigger.next();
      this.users  = response;
      console.log(response);
    });
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  open(content, data) {
    this.id_payment = data;
    this.modalService.open(content, { size: 'md'});
  }
  update() {
    console.log(this.id_payment);

    this.userService.putVerification(this.id_payment).subscribe(response => {
      console.log(response);
    });
  }

}
