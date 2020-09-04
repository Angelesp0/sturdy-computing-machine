import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Service } from '../../models/service';


const headers = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // tslint:disable-next-line: variable-name
  base_path = 'http://192.168.137.1:3000/services/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Ha ocurrido un error:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `codigo de retorno del Backend ${error.status}, ` +
        `body es: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Algo malo a pasado; porfavor intentalo de nuevo mas tarde.');
  }
  getServices() {
    return this.http.get(this.base_path , this.httpOptions);
  }
  getService(id) {
    return this.http.get(this.base_path + id, this.httpOptions);
  }
  updateService(id, item){
    const params  = new HttpParams()
      .set('name_service', item.name_service)
      .set('desc_service', item.desc_service )
      .set('price', item.price);
    return this.http
      .put<any>(this.base_path + id, item, {params} )
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  deleteService(id) {
    return this.http
      .delete(this.base_path + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  createItem(item, file): Observable<Service> {
    console.log(file);
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('name_service', item.name_service);
    uploadData.append('desc_service', item.desc_service);
    uploadData.append('price', item.price);
    uploadData.append('img', file.name);

    return this.http
      .post<Service>('http://192.168.137.1:3000/services1', uploadData)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  uploadImage( image , componentId?) {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('file', image, image.name);
    return this.http.post('http://192.168.137.1:3000/subir', uploadData)  ;
  }

  postImg(id, file) {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('category', 'INE Frontal');
    uploadData.append('company_id_company', id);

    return this.http
      .post('http://192.168.137.1:3000/companies/img', uploadData)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  postImg1(id, file) {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('category', 'INE Posterior');
    uploadData.append('company_id_company', id);

    return this.http
      .post('http://192.168.137.1:3000/companies/img', uploadData)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  postImg2(id, file) {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('category', 'Comprobante');
    uploadData.append('company_id_company', id);

    return this.http
      .post('http://192.168.137.1:3000/companies/img', uploadData)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  postImg3(id, file) {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('category', 'Establecimiento Exterior');
    uploadData.append('company_id_company', id);

    return this.http
      .post('http://192.168.137.1:3000/companies/img', uploadData)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  postImg4(id, file) {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('category', 'Establecimiento Interior');
    uploadData.append('company_id_company', id);

    return this.http
      .post('http://192.168.137.1:3000/companies/img', uploadData)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  firma(id, file) {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('category', 'Firma');
    uploadData.append('company_id_company', id);

    return this.http
      .post('http://192.168.137.1:3000/companies/img', uploadData)
      .pipe(
        catchError(this.handleError)
      );
  }

  postContract(id, date, file) {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('category', 'Contrato');
    uploadData.append('company_id_company', id);
    uploadData.append('upload_date', date);

    return this.http
      .post('http://192.168.137.1:3000/companies/img', uploadData)
      .pipe(
        catchError(this.handleError)
      );
  }

  postAcuse(id, file) {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('category', 'Acuse');
    uploadData.append('company_id_company', id);
    return this.http
      .post('http://192.168.137.1:3000/companies/img', uploadData)
      .pipe(
        catchError(this.handleError)
      );
  }

  locatio(lat, lng, label, company_id_company) {
    return this.http
    .post('http://192.168.137.1:3000/companies/location', {lat, lng, label, company_id_company} )
    .pipe(
      catchError(this.handleError)
    );
  }

  getLocations() {
    return this.http.get('http://192.168.137.1:3000/location/', this.httpOptions);
  }

  getInfContract(id) {
    return this.http.get('http://192.168.137.1:3000/contract/' + id, this.httpOptions);
  }
  getContract(id) {
    return this.http.get('http://192.168.137.1:3000/getcontract/' + id, this.httpOptions);
  }

  getFirm() {
    return this.http.get('http://192.168.137.1:3000/getfirm', this.httpOptions);
  }

  getLastReceipt() {
    return this.http.get('http://192.168.137.1:3000/receipt', this.httpOptions);
  }
  getReceiptById(id) {
    return this.http.get('http://192.168.137.1:3000/receipt/' + id, this.httpOptions);
  }

  postReceipt(id, num, date, file) {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('company_id_company', id);
    uploadData.append('num_receipt', num);
    uploadData.append('upload_date', date);


    return this.http
      .post('http://192.168.137.1:3000/receipt', uploadData)
      .pipe(
        catchError(this.handleError)
      );
  }

  sendEmail(data) {
    return this.http.post('http://192.168.137.1:3000/email', data)
    .pipe(
      catchError(this.handleError)
    );
  }

  getLastContract() {
    return this.http.get('http://192.168.137.1:3000/contractByIdCompany', this.httpOptions);
  }

  getContracts() {
    return this.http.get('http://192.168.137.1:3000/dashboard/contract', this.httpOptions);
  }

  getSales() {
    return this.http.get('http://192.168.137.1:3000/dashboard/sales', this.httpOptions);
  }

  getExecutive() {
    return this.http.get('http://192.168.137.1:3000/dashboard/executive', this.httpOptions);
  }
  getExecutiveSales(id) {
    return this.http.get('http://192.168.137.1:3000/dashboard/executive/' + id, this.httpOptions);
  }
}
