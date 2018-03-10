import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-lista-reparacion',
  templateUrl: './lista-reparacion.component.html',
  styleUrls: ['./lista-reparacion.component.css']
})
export class ListaReparacionComponent implements OnInit {

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

    let id = JSON.parse(localStorage.getItem('user')).id;

    this.http.post('http://localhost:3000/users/vehiculos-mecanico', { id }, { headers })
      .map(res => res.json())
      .subscribe(data => {
        console.log(data.vehiculos);
        this.vehiculos = data.vehiculos;
        localStorage.setItem('vehiculos-mecanico', JSON.stringify(data.vehiculos));
      }, err => {
        console.log('Error al pedir los vehiculos desde ListaReparacionComponent: ', err);
        return false;
      }); 
  }

  irAActualizar(indice) {
    localStorage.setItem('vehiculo-a-actualizar', this.vehiculos[indice].id);
    this.router.navigate(['/actualizar-orden']);
  }

}