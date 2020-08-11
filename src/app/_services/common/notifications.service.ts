import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Notification } from '../../models/notification';

const headers = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  // tslint:disable-next-line: variable-name
  base_path = 'http://192.168.137.1:3000/notifications/';

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

  getNotifications(id_addressee) {
      return this.http.get(this.base_path + id_addressee, this.httpOptions);
  }

  postNotifications(id_addressee, data): Observable<Notification> {
    console.log(data);
    return this.http.post<Notification>(this.base_path + id_addressee, data, this.httpOptions)
    .pipe(
        catchError(this.handleError)
      );
  }
  getNotificationsById(id_addressee, id_notifications) {
    return this.http.get(this.base_path + id_addressee + '/' + id_notifications , this.httpOptions);
  }

  updateNotification(id, data) {
    console.log(id);
    console.log(this.base_path + id);

    return this.http.put(this.base_path + id, {data}, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }



}
