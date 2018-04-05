import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  vehiculos: any[];

  constructor (
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

    this.http.get('http://localhost:3000/users/vehiculos', { headers })
      .map(res => res.json())
      .subscribe(data => {
        console.log(data.vehiculos);
        this.vehiculos = data.vehiculos;
        localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
      }, err => {
        console.log('Error al pedir los vehiculos desde GarageComponent: ', err);
        return false;
      }); 
  }

  irAOrden(indice) {
    localStorage.setItem('vehiculo-con-orden', this.vehiculos[indice].id);
    this.router.navigate(['/solicitar-orden']);
  }

  eliminarVehiculo(indice) {
    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let id = this.vehiculos[indice].id;

    // Hacer la petición, se retorna una promesa
    this.http.post('http://localhost:3000/users/eliminar-vehiculo', { id }, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        }
      });

    // Lo elimina de la interfaz sin necesidad de hacer refresh
    this.vehiculos.splice(indice, 1);
  }

  cancelarCita(indice) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/cliente/cancelar-cita', {id: this.vehiculos[indice].id}, { headers })
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
