import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {

  authToken: any;
  user: any;

  constructor(private http: Http) { }

  setEmployeeData(data) {

    data.id = JSON.parse(localStorage.getItem('user')).id;

    console.log('Datos: ', data);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/datos-empleado', data, { headers: headers })
      .map(res => res.json());
  }

  // loadToken() {
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  // }

  // storeUserData(token, user) {
  //   localStorage.setItem('id_token', token);
  //   localStorage.setItem('user', JSON.stringify(user));
  //   this.authToken = token;
  //   this.user = user;
  // }
}
