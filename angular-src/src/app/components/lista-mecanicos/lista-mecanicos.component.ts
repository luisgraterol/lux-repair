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

  elegido: any;
  mecanicos: any;
  vehiculos: any;

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:3000/gerente/vehiculos-y-mecanicos', { headers })
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

          data.mecanicos.map(mecanico => {
            if (mecanico.id == vehiculo.Mecanico) {
              vehiculo.Mecanico = mecanico.Nombre;
            }
          })
        });

        this.vehiculos = data.vehiculos;
        console.log('Vehiculos: ', this.vehiculos);
        this.mecanicos = data.mecanicos;
        console.log('Mecanicos: ', this.mecanicos);

        localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
      }, err => {
        console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
        return false;
      });
  }

  asignarMecanico() {
    // Filtra el arreglo y solo deja los ID de los vehiculos
    let chequeados = this.vehiculos
      .filter(vehiculo => !!vehiculo.Chequeado)
      .map(vehiculo => {
        vehiculo.Mecanico = this.elegido.Nombre;
        vehiculo.Chequeado = false;
        return vehiculo.id
      });

    // Guarda el ID del mecanico a asignar
    let idMecanico = this.elegido.id;

    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/gerente/asignar-mecanico', { id: idMecanico, vehiculos: chequeados }, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        }
      });
  }

  verDetalle(indice) {
    localStorage.setItem('vehiculo-detalle', indice);
    localStorage.setItem('ultima-pagina', '/lista-mecanicos');
    this.router.navigate(['/detalle-vehiculo']);
  }

}
