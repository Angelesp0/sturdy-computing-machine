import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Company } from './../../models/company';
import { retry, catchError } from 'rxjs/operators';
import { CompanyServices } from './../../models/company_services';
import { stringify } from 'querystring';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  // tslint:disable-next-line: variable-name
  base_path = 'http://192.168.137.1:3000/companies';

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
  getCompanies() {
      return this.http.get('http://192.168.137.1:3000/companies', this.httpOptions);
  }
  getCompany(id) {
    return this.http.get('http://192.168.137.1:3000/companies/' + id, this.httpOptions);
  }
  updateCompany(id, item) {
    const params  = new HttpParams()
      .set('rfc', item.rfc)
      .set('street', item.street )
      .set('cp', item.cp)
      .set('city', item.city)
      .set('tel', item.tel)
      .set('company', item.company)
      .set('num_ext', item.num_ext)
      .set('num_int', item.num_int)
      .set('state', item.state)
      .set('colony', item.colony )
      .set('name', item.name)
      .set('last_name', item.last_name)
      .set('mobile', item.mobile)
      .set('email', item.email)
      .set('invoice', item.invoice)
      .set('users_id_user', item.users_id_user);
    return this.http
      .put<any>(this.base_path + '/' + id, item, {params} )
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  deleteCompany(id) {
    console.log(id);
    return this.http
      .delete(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  createCompany(item): Observable<Company> {
    const params  = new HttpParams()
      .set('rfc', item.rfc)
      .set('street', item.street )
      .set('cp', item.cp)
      .set('city', item.city)
      .set('tel', item.tel)
      .set('company', item.company)
      .set('num_ext', item.num_ext)
      .set('num_int', item.num_int)
      .set('state', item.state)
      .set('colony', item.colony )
      .set('name', item.name)
      .set('last_name', item.last_name)
      .set('mobile', item.mobile)
      .set('email', item.email)
      .set('invoice', item.invoice)
      .set('status', '1')
      .set('start_date', '2020-07-20')
      .set('end_date', '2020-08-20')
      .set('users_id_user', '24');
    return this.http
      .post<Company>(this.base_path, item, {params})
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  company_has_service(item): Observable<CompanyServices> {
    return this.http
      .post<CompanyServices>('http://192.168.137.1:3000/company_services', item)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }



}
