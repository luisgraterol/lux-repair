import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  // Valida el token del usuario
  loggedIn() {
    return tokenNotExpired('id_token');
  }
}
