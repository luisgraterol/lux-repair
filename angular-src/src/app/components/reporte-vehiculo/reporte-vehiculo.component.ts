import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-reporte-vehiculo',
  templateUrl: './reporte-vehiculo.component.html',
  styleUrls: ['./reporte-vehiculo.component.css']
})
export class ReporteVehiculoComponent implements OnInit {

  vehiculos: any[];
  clientes: any[];

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:3000/users/vehiculos-gerente-cliente', { headers })
      .map(res => res.json())
      .subscribe(data => {
        data.vehiculos.map(vehiculo => {});

        this.vehiculos = data.vehiculos;
        console.log(this.vehiculos);

        localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
      }, err => {
        console.log('Error al pedir los vehiculos desde ReporteVehiculoComponent: ', err);
        return false;
      });
    
  }

  generar(indice) {
    localStorage.setItem('vehiculo-reporte', indice);
    localStorage.setItem('ultima-pagina', '/reporte-vehiculo');
    this.router.navigate(['/detalle-vehiculo']);
  }

}