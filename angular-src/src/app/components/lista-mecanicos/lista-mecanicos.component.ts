import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-lista-mecanicos',
  templateUrl: './lista-mecanicos.component.html',
  styleUrls: ['./lista-mecanicos.component.css']
})
export class ListaMecanicosComponent implements OnInit {

  elegido: object;
  mecanicos: any;
  vehiculos: any;

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.mecanicos = [
      {
        id: 1,
        Nombre: 'Pepito Perez',
      },
      {
        id: 2,
        Nombre: 'Pablo De Los Palotes',
      },
      {
        id: 3,
        Nombre: 'alkdsjaf',
      },
      {
        id: 4,
        Nombre: ';lkajdsfa`',
      },
      {
        id: 5,
        Nombre: 'Pepito Perez',
      },
    ];
  }

  ngOnInit() {
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:3000/gerente/vehiculos-sin-mecanico', { headers })
      .map(res => res.json())
      .subscribe(data => {
        data.vehiculos.map(vehiculo => {
          if (vehiculo.FechaSolicitud) {
            // Guarda la fecha formateada
            vehiculo.FechaSolicitud = this.datePipe.transform(vehiculo.FechaSolicitud);
          }

          if (vehiculo.FechaAdmision) {
            // Guarda la fecha formateada
            vehiculo.FechaAdmision = this.datePipe.transform(vehiculo.FechaAdmision);
          }
        });

        this.vehiculos = data.vehiculos;
        console.log(this.vehiculos);

        localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
      }, err => {
        console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
        return false;
      });
  }

  verDetalle(indice) {
    localStorage.setItem('vehiculo-detalle', indice);
    localStorage.setItem('ultima-pagina', '/lista-mecanicos');
    this.router.navigate(['/detalle-vehiculo']);
  }

}
