import { Component, OnInit } from '@angular/core';
import { CompanyService } from './../_services/company/company.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: any;

  constructor(
    public companyService: CompanyService
    ) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  getAllCompanies() {
    this.companyService.getCompanies()
    .subscribe(
      (data) => { // Success
        this.companies = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
