import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../_services/admin/admin.service';
import { Subject  } from 'rxjs';
import { map  } from 'rxjs/operators';

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
  images: any;
  exterior: any;
  panelOpenState = false;

  constructor(
    public adminService: AdminService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.id = this.route.snapshot.params["id_company"];
    // crear tabla con las declaraciones  388
    // Generar los recibos en el apartado de pagos
    this.adminService.getDocuments(this.id).pipe(map(this.extractData)).subscribe(response => {
      this.dtTrigger.next();
      console.log(response);
      this.documents  = response;
    });

    //this.adminService.getDocuments(this.id).subscribe(response => this.documents = response);
    this.adminService.getExterior(this.id).subscribe(response => this.exterior = response);
    this.adminService.getImages(this.id).subscribe(response => this.images = response);

  }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
}
