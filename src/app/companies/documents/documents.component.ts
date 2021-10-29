import { Component, OnInit, EventEmitter, ViewChild  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../_services/admin/admin.service';
import { Subject  } from 'rxjs';
import { map  } from 'rxjs/operators';
import {FileUploader} from 'ng2-file-upload';
import { CompanyService } from '../../_services/company/company.service';
import { ToastrService } from 'ngx-toastr';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
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
  server = 'http://74.208.71.98:3000/files/';
  diferencia;

  constructor(
    public adminService: AdminService,
    public companyService: CompanyService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) {
    let id = this.route.snapshot.params["id_company"]    
      this.adminService.getReceipt(id).subscribe(response =>{
        console.log(response);
       this.recibo = response});
      this.adminService.getDeclaracion(id).subscribe(response => this.declaracion = response);
      this.adminService.getLinea(id).subscribe(response => this.linea = response);
      this.adminService.getFactura(id).subscribe(response => this.factura = response);
  }

  async ngOnInit() {
  ////////////////////////////// Cargamos todos los elementos de la vista con una ruta para cada documento //////////////////////////////
  ////////////////////////////// Esto es prioritario revisar los bugs //////////////////////////////


    //////////////////////////////////////////////////////////////////

    this.date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    await this.forTabla();
    this.dtTrigger.next();
    this.rerender();

    //////////////////////////////////////////////////////////////////




    this.dtOptions = { pagingType: 'full_numbers'};
    this.adminService.getCer(this.id).subscribe(response=> this.cer = response[0]);
    this.adminService.getKey(this.id).subscribe(response=> this.key = response[0]);
    this.companyService.getCompany(this.id).subscribe(response => this.sat = response["sat"]);
    this.adminService.getOpinion(this.id).subscribe(response => this.opinion = response[0]);
    this.adminService.getConstancia(this.id).subscribe(response => this.constancia = response[0]);
    //this.adminService.getDocuments(this.id).subscribe(response => this.documents = response);
    this.adminService.getExterior(this.id).subscribe(response => this.exterior =  this.server + response[0].nombre);
    this.adminService.getImages(this.id).subscribe(response => this.images = response);
    this.adminService.getInterior(this.id).subscribe(response => this.interior =  this.server + response[0].nombre);
    this.adminService.getIneFrontal(this.id).subscribe(response => this.ineF =  this.server + response[0].nombre);
    this.adminService.getInePosterior(this.id).subscribe(response => this.ineP =  this.server + response[0].nombre);
    this.adminService.getComprobante(this.id).subscribe(response => this.comprobante =  this.server + response[0].nombre);
    this.adminService.getStatements(this.id).subscribe(response => this.statements = response);
    this.uploader.onAfterAddingFile = (file) => {};
    this.uploader.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {};
    this.uploader.onCompleteAll = () => console.log('Subir archivos');
    this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {};
  }

  ////////////////////////////// Esta funcion genera una tabla con fechas //////////////////////////////
  //////////// cuando subas un documento en la fecha seleccionada, el documento se subira con esa fecha //////////////////////

  forTabla(){
    return new Promise<void>((resolve,reject)=>{
    let documents  = [];
    this.id = this.route.snapshot.params["id_company"]    

    let datea:any;
    this.adminService.getDocuments(this.id).pipe(map(this.extractData)).subscribe(response => {
      console.log(response);
      this.primer_recibo=  new Date(response[0]['update_time']);
      this.diferencia = this.monthDiff(this.primer_recibo, this.todayDate)+1;
      for (let i = 0; i <=(this.diferencia+2); i++) {
        datea =[];
        datea.id = i+1;
        datea.update_time = this.primer_recibo.getFullYear() + '-' + (this.primer_recibo.getMonth() + i +1) + '-' + this.primer_recibo.getDate();
          if (this.declaracion) {
            try{
              this.declaracion.forEach(declaracion => {
                let newDate = new Date(declaracion.upload_date);
                if(this.primer_recibo.getMonth()+ i +1 === newDate.getMonth() +1){
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
  
          } else { 
            datea.recibo=[]
          }
          documents.push(datea);
          
      }
      this.documents = documents;
      resolve();
    });
  });

  }

  clickEvent(){ this.toggle = !this.toggle; }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    this.file = file;
  }

  ////////////////////////////// Funcion para subir documentos //////////////////////////////
  postStatements() {
    this.adminService.postStatements(this.id, this.date, this.file ).subscribe(res => console.log(res));
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
    this.adminService.postArchivos(this.id, fecha, category, this.file).subscribe(res => this.showNotification('top', 'right', 2, category));
  }

  ////////////////////////////// Aqui descubrimos la diferencia, entre el primer mes de registro y el actual + 2 meses //////////////////////////////

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

  rerender(): void {
    this.dtElement.dtInstance.then(async(dtInstance: DataTables.Api)  =>  {
      // Destroy the table first
      await this.forTabla();
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
}
