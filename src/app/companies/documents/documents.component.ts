import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../_services/admin/admin.service';
import { Subject  } from 'rxjs';
import { map  } from 'rxjs/operators';
import {FileUploader} from 'ng2-file-upload';
import { CompanyService } from '../../_services/company/company.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id: any;
  documents: any;
  sat: any;
  images: any;
  exterior: any;
  interior: any;
  ineF: any;
  ineP: any;
  comprobante: any;
  cer: false;
  key: false;

  panelOpenState = false;
  file: any;
  todayDate: Date = new Date();
  date: any;
  statements: any = [0];
  uploader = new FileUploader({
    maxFileSize: 1024 * 1024 * 1
  });

  constructor(
    public adminService: AdminService,
    public companyService: CompanyService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.id = this.route.snapshot.params["id_company"]
    this.adminService.getCer(this.id).subscribe(response=> {
      console.log(response);
      this.cer = response[0];
    })
    this.adminService.getKey(this.id).subscribe(response=> {
      console.log(response);
      this.key = response[0];
    })
    this.companyService.getCompany(this.id).subscribe(response => {
      this.sat = response["sat"];
      console.log(this.sat);
    })

    this.adminService.getStatements(this.id).subscribe(response => {
      console.log(response);
      this.statements = response
    });

    // crear tabla con las declaraciones  388
    // Generar los recibos en el apartado de pagos
    this.adminService.getDocuments(this.id).pipe(map(this.extractData)).subscribe(response => {
      this.dtTrigger.next();
      console.log(response);
      this.documents  = response;
    });

    // this.adminService.getDocuments(this.id).subscribe(response => this.documents = response);
    this.adminService.getExterior(this.id).subscribe(response => this.exterior = response);
    this.adminService.getImages(this.id).subscribe(response => this.images = response);
    this.adminService.getInterior(this.id).subscribe(response => this.interior = response);
    this.adminService.getIneFrontal(this.id).subscribe(response => this.ineF = response);
    this.adminService.getInePosterior(this.id).subscribe(response => this.ineP = response);
    this.adminService.getComprobante(this.id).subscribe(response => this.comprobante = response);

    // ============================================5===================================== //
    this.uploader.onAfterAddingFile = (file) => {
    };
    this.uploader.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
    };
    this.uploader.onCompleteAll = () => {
      console.log('Subir archivos');
    };
    this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
    };

  }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.file = file;
  }
  postStatements() {
    this.adminService.postStatements(   this.id, this.date, this.file ).subscribe(res => console.log(res));
  }

  postCer() {
    this.adminService.postCer(this.id, this.date, this.file ).subscribe(res => console.log(res));
  }

  postKey() {
    this.adminService.postKey(this.id, this.date, this.file ).subscribe(res => console.log(res));
  }

  

  setSat() {
    this.companyService.putSat(this.id, this.sat).subscribe(reponse => console.log(reponse))
  }

}
