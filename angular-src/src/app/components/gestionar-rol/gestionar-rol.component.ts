import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-gestionar-rol',
  templateUrl: './gestionar-rol.component.html',
  styleUrls: ['./gestionar-rol.component.css']
})
export class GestionarRolComponent implements OnInit {

  empleados: any[];
  rol: string;

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {  
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    return this.http.get('users/empleados', { headers })
      .map(res => res.json())
      .subscribe(data => {
        console.log(data.empleados);
        this.empleados = data.empleados;
        localStorage.setItem('empleadosSinRol', JSON.stringify(data.empleados));
      }, err => {
        console.log('Error al pedir los empleados desde GestionarRolComponent: ', err);
        return false;
    });
  }

  asignarRol(indice) {

    // Validacion de que se haya seleccionado el rol a asignar
    if (this.rol == undefined || this.rol == '') {
      this.flashMessage.show('Por favor, seleccione un rol.', {cssClass: 'custom-danger', timeout: 5000});
      return false;
    }

    let rol = this.rol;

    if (rol === 'Mecánico')
      rol = 'Mecanico'; // Quitamos el tilde en la 'a'

    // Setteamos en minuscula la primera letra
    rol = rol.charAt(0).toLowerCase() + rol.slice(1);

    const data = {
      id: this.empleados[indice].id,
      rol
    };

    console.log(data);

    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    return this.http.post('users/asignar-rol', data, { headers: headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        }
      });
  }
}