import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../../../../gglobals-ionic/gglobals/src/app/models/company';
import { CompanyService } from './../../_services/company/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  data: any;
  constructor(
    private companyService: CompanyService,
    public router: Router) {
      this.data = new Company();
    }
    create() {
      this.companyService.createCompany(this.data).subscribe((response) => {
        console.log(response);
      });
    }
  ngOnInit(): void {
  }

}
