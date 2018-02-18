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
    // Pedir el ID del usuario al cual corresponden los datos a actualizar
    data.id = JSON.parse(localStorage.getItem('user')).id;
    console.log('Datos: ', data);

    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    return this.http.post('http://localhost:3000/users/datos-empleado', data, { headers: headers })
      .map(res => res.json());
  }

  setVehicleData(data) {
    // Pedir el ID del usuario al cual corresponden los datos a actualizar y agregarlo a los datos
    data.idCliente = JSON.parse(localStorage.getItem('user')).id;

    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    return this.http.post('http://localhost:3000/users/registrar-vehiculo', data, { headers: headers })
      .map(res => res.json());
  }

  getVehicles() {
    let headers = new Headers();

    // Fetches the token of the currently logged in user from localStorage
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/users/vehiculos', { headers: headers })
      .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}
