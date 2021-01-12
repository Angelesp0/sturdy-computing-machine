import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { User } from '../../models/user';
import { retry, catchError } from 'rxjs/operators';
import { stringify } from 'querystring';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // tslint:disable-next-line: variable-name
  base_path = 'http://192.168.100.71:3000/users';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET',
      'Access-Control-Allow-Headers':'application/json',
      'Content-Type': 'application/json; charset=utf-8',

    })
  };


  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getUsers() {
      return this.http.get('http://192.168.100.71:3000/users', this.httpOptions);
  }
  getExecutive() {
    return this.http.get('http://192.168.100.71:3000/executive', this.httpOptions);
}

  getUser(id) {
    return this.http.get('http://192.168.100.71:3000/users/' + id, this.httpOptions);
  }

  updateItem(id, item) {
    const params  = new HttpParams()
      .set('first_name', item.first_name)
      .set('last_name', item.last_name )
      .set('direction', item.direction)
      .set('colony', item.colony)
      .set('cp', item.cp)
      .set('role', item.role)
      .set('email', item.email)
      .set('password', item.password);
    return this.http
      .put<User>(this.base_path + '/' + id, item, {params} )
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  deleteItem(id) {
    return this.http
      .delete<User>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  createItem(item): Observable<User> {
    const params  = new HttpParams()
    .set('first_name', item.first_name)
    .set('last_name', item.last_name )
    .set('direction', item.direction)
    .set('colony', item.colony)
    .set('cp', item.cp)
    .set('role', item.role)
    .set('email', item.email)
    .set('password', item.password)
    .set('username', item.username);
    return this.http
      .post<User>(this.base_path, item, {params})
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  login(username: string, password: string) {
    return this.http.post<any>('http://192.168.100.71:3000/auth', { username, password })
        .pipe(
          map(
            user => {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);

            }

            return user;
        }),
        catchError(this.handleError)
        );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  uploadImage( image , componentId?) {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('file', image, image.name);
    return this.http.post('http://192.168.100.71:3000/subir', uploadData)  ;
  }

  getImg(id) {
    return this.http.get('http://192.168.100.71:3000/imagenes/' + id, this.httpOptions);
  }

  getdocuments(id) {
    return this.http.get('http://192.168.100.71:3000/user/files/' + id, this.httpOptions);
  }

  getDocumentsByIdCompany(id) {
    return this.http.get('http://192.168.100.71:3000/company/files/' + id, this.httpOptions);
  }

  getServices() {
    return this.http.get('http://192.168.100.71:3000/services', this.httpOptions);
  }

  getServicesByUserId(id) {
    return this.http.get('http://192.168.100.71:3000/user/' + id + '/services/', this.httpOptions);
  }

  getCompaniesByUserId(id) {
    return this.http.get('http://192.168.100.71:3000/users/' + id + '/companies/', this.httpOptions);
  }

  getPaymentsByCompanyId(id) {
    return this.http.get('http://192.168.100.71:3000/companies/' + id + '/payments/', this.httpOptions);
  }

  getVerification() {
    return this.http.get('http://192.168.100.71:3000/verification', this.httpOptions);
  }

  putVerification(id) {
    console.log(id);
    return this.http.put('http://192.168.100.71:3000/verification/' + id, this.httpOptions);
  }

}
