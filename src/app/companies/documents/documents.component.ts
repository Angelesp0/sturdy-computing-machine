import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../_services/admin/admin.service';
import { Subject  } from 'rxjs';
import { map  } from 'rxjs/operators';
import {FileUploader} from 'ng2-file-upload';
import { CompanyService } from '../../_services/company/company.service';
import { ToastrService } from 'ngx-toastr';

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
  constancia: false;
  opinion: false;
  linea: any;
  factura: any;
  declaracion: any;
  recibo: any;
  meses: number;
  today = new Date();
  primer_recibo;
  panelOpenState = false;
  file: any;
  todayDate: Date = new Date();
  date: any;
  statements: any = [0];
  uploader = new FileUploader({
    maxFileSize: 1024 * 1024 * 1
  });
  toggle = true;

  constructor(
    public adminService: AdminService,
    public companyService: CompanyService,
    private route: ActivatedRoute,
    private toastr: ToastrService,

    ) {
    let datea:any;
    this.date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    console.log('date',this.date)
    this.documents  = [];

    this.id = this.route.snapshot.params["id_company"]    
      this.adminService.getReceipt(this.id).subscribe(response => {
        this.recibo = response;

      console.log('recibo', response);
      });
      this.adminService.getDeclaracion(this.id).subscribe(response => {
        this.declaracion = response;
      console.log('declaracion', response);
      });
      this.adminService.getLinea(this.id).subscribe(response => {
        this.linea = response;
      console.log('linea',response);
      });
      this.adminService.getFactura(this.id).subscribe(response => {
        this.factura = response;
      console.log('factura',response);
      });
      /*this.adminService.getDocuments(this.id).pipe(map(this.extractData)).subscribe(response => {
        this.dtTrigger.next(); 
        this.primer_recibo=  new Date(response[0]['update_time']);
        let meses = this.today.getMonth() - this.primer_recibo.getMonth();
        let diferencia = this.monthDiff(this.primer_recibo, this.todayDate);
        console.log('primer_recibo',this.primer_recibo);
        console.log('todayDate',this.todayDate);
        console.log('diferencia',diferencia);


        for (let i = 0; i <= (diferencia+1); i++) {
          datea =[];


          datea.id = i+1;
          let mes1 = this.primer_recibo.getFullYear() + '-' + (this.primer_recibo.getMonth() + i +1) + '-' + this.primer_recibo.getDate();
          datea.update_time = mes1;
          if (this.declaracion) {
            datea.declaracion = this.declaracion[i];
          } else { datea.declaracion=0}
          if (this.linea){
            datea.linea = this.linea[i];
          } else { datea.linea=0}
          if (this.factura){
            datea.factura = this.factura[i];
          } else { datea.factura=0}
          if (this.recibo){
            datea.recibo = this.recibo[i];
          } else { datea.recibo=0}
          this.documents.push(datea);
        }
      });*/


      this.adminService.getDocuments(this.id).pipe(map(this.extractData)).subscribe(response => {
        this.dtTrigger.next(); 
        this.primer_recibo=  new Date(response[0]['update_time']);
        let diferencia = this.monthDiff(this.primer_recibo, this.todayDate)+1;

        for (let i = 0; i <=diferencia; i++) {
          datea =[];
          datea.id = i+1;
          datea.update_time = this.primer_recibo.getFullYear() + '-' + (this.primer_recibo.getMonth() + i +1) + '-' + this.primer_recibo.getDate();
            if (this.declaracion) {
              try{
                this.declaracion.forEach(declaracion => {
                  let newDate = new Date(declaracion.upload_date);
                  if(this.primer_recibo.getMonth()+ i +1 === newDate.getMonth() +1){
                    console.log(declaracion.id_firms)
                    datea.declaracion = declaracion;
                  } else {
                  }
                });
              } catch(err){
                console.log(err);
              }
            } else { 
              datea.declaracion=[]
            }
            if (this.linea){
              try{
                this.linea.forEach(linea => {
                  let newDate = new Date(linea.upload_date);
                  if(this.primer_recibo.getMonth()+ i +1 === newDate.getMonth() +1){
                    datea.linea = linea;
                  } else {
                  }
                });
              } catch(err){
                console.log(err);
              }
            } else { 
              datea.linea=[]
            }
            if (this.factura){
              try{
                this.factura.forEach(factura => {
                  let newDate = new Date(factura.upload_date);
                  if(this.primer_recibo.getMonth()+ i +1 === newDate.getMonth() +1){
                    datea.factura = factura;
                  } else {
                  }
                });
              } catch(err){
                console.log(err);
              }  
            } else { 
              datea.factura=[]
            }
            if (this.recibo){
              datea.recibo = this.recibo[i];
  
            } else { datea.recibo=[]}
            this.documents.push(datea);
            console.log(this.documents)
          //}
        }
      });

     }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.adminService.getCer(this.id).subscribe(response=> {
      this.cer = response[0];
    })
    this.adminService.getKey(this.id).subscribe(response=> {
      this.key = response[0];
    })
    this.companyService.getCompany(this.id).subscribe(response => {
      this.sat = response["sat"];
    })
    this.adminService.getOpinion(this.id).subscribe(response => this.opinion = response[0]);
    
    this.adminService.getConstancia(this.id).subscribe(response => this.constancia = response[0]);
          // this.adminService.getDocuments(this.id).subscribe(response => this.documents = response);
          this.adminService.getExterior(this.id).subscribe(response => this.exterior = response);
          this.adminService.getImages(this.id).subscribe(response => this.images = response);
          this.adminService.getInterior(this.id).subscribe(response => this.interior = response);
          this.adminService.getIneFrontal(this.id).subscribe(response => this.ineF = response);
          this.adminService.getInePosterior(this.id).subscribe(response => this.ineP = response);
          this.adminService.getComprobante(this.id).subscribe(response => this.comprobante = response);

    /*

*/

    this.adminService.getStatements(this.id).subscribe(response => {
      this.statements = response
    });

    // crear tabla con las declaraciones  388
    // Generar los recibos en el apartado de pagos

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
    console.log('data',this.documents);

  }

  clickEvent(){
    this.toggle = !this.toggle;
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

  postConstancia() {
    this.adminService.postConstancia(this.id, this.date, this.file ).subscribe(res => console.log(res));
  }
  postOpinion() {
    this.adminService.postOpinion(this.id, this.date, this.file ).subscribe(res => console.log(res));
  }

  postArchivos(category, fecha) {
    this.adminService.postArchivos(this.id, fecha, category, this.file).subscribe(res =>       this.showNotification('top', 'right', 2, category));
  }

  monthDiff(d1, d2) { 
    var months; 
    months = (d2.getFullYear() - d1.getFullYear()) * 12; 
    months -= d1.getMonth() + 1; 
    months += d2.getMonth(); 
    return months <= 0 ? 0 : months; 
  }

  showNotification(from, align, notification, category) {


    switch (notification) {
      case 1:
      this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> La transacción se aprobó, pero no se autorizó.', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: 'alert alert-info alert-with-icon',
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 2:
      this.toastr.success(`<span class="now-ui-icons ui-1_bell-53"></span> ${category} se ha subido correctamente`, '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: 'alert alert-success alert-with-icon',
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 3:
      this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> El Pago se Cancelo, Favor de re-intentar', '', {
         timeOut: 8000,
         closeButton: true,
         enableHtml: true,
         toastClass: 'alert alert-warning alert-with-icon',
         positionClass: 'toast-' + from + '-' +  align
       });
      break;
      case 4:
      this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span><b>Ha ocurrido un error</b> - favor de regargar la pagina e intentarlo de nuevo', '', {
         timeOut: 8000,
         enableHtml: true,
         closeButton: true,
         toastClass: 'alert alert-danger alert-with-icon',
         positionClass: 'toast-' + from + '-' +  align
       });
       break;
      default:
      break;
    }
  }
}
