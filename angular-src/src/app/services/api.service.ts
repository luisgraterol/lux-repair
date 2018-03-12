import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {

  authToken: any;
  user: any;
  vehiculos: any;

  constructor(private http: Http) { }

  setEmployeeData(data) {
    // Pedir el ID del usuario al cual corresponden los datos a actualizar
    data.id = JSON.parse(localStorage.getItem('user')).id;
    console.log('Datos: ', data);

    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    return this.http.post('http://localhost:3000/users/datos-empleado', data, { headers })
      .map(res => res.json());
  }

  setVehicleData(data) {
    // Pedir el ID del usuario al cual corresponden los datos a actualizar y agregarlo a los datos
    data.idCliente = JSON.parse(localStorage.getItem('user')).id;

    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    return this.http.post('http://localhost:3000/users/registrar-vehiculo', data, { headers })
      .map(res => res.json());
  }

  getVehicles() {
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/users/vehiculos', { headers })
      .map(res => res.json());
  }

  eliminarVehiculo(id) {
    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    return this.http.post('http://localhost:3000/users/eliminar-vehiculo', {id}, { headers: headers })
      .map(res => res.json());
  }

  crearOrden(data) {
    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    return this.http.post('http://localhost:3000/users/solicitar-orden', data, { headers: headers })
      .map(res => res.json());
  }

  crearRepuesto(data) {
    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    return this.http.post('http://localhost:3000/users/crear-repuesto', data, { headers })
      .map(res => res.json());
  }
    
  modificarRepuesto(data) {
    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    return this.http.post('http://localhost:3000/users/modificar-repuesto', data, { headers })
      .map(res => res.json());
  }

  actualizarOrden(data) {
    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
        return this.http.post('http://localhost:3000/users/asignar-rol', data, { headers: headers })
      .map(res => res.json());
  }


  getEmpleadosSinRol() {
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/users/empleados', { headers })
      .map(res => res.json());
  }

  asignarRol(data) {
    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
        return this.http.post('http://localhost:3000/users/asignar-rol', data, { headers: headers })
      .map(res => res.json());
  }
    
  getRepuestos() {
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');
    
    return this.http.get('http://localhost:3000/users/repuestos', { headers })
      .map(res => res.json());
  }

  getVehiculosGerente() {
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/users/vehiculos-gerente', { headers })
      .map(res => res.json());
  }

  getDueno(id) {
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/users/cliente', {id}, { headers })
      .map(res => res.json());
  }

  getVehiclesMecanico() {

    let id = JSON.parse(localStorage.getItem('user')).id;

    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');
    
    return this.http.post('http://localhost:3000/users/vehiculos-mecanico', {id}, { headers })
      .map(res => res.json());
  }

  asignarAdmision(arreglo) {
    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    return this.http.post('http://localhost:3000/users/fecha-admision', arreglo, { headers: headers })
      .map(res => res.json());
  }

  condicionEntrega(data) {
    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    return this.http.post('http://localhost:3000/users/condicion-entrega', data, { headers })
      .map(res => res.json());
  }

}
