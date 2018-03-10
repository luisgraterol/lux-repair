import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cola-espera',
  templateUrl: './cola-espera.component.html',
  styleUrls: ['./cola-espera.component.css']
})
export class ColaEsperaComponent implements OnInit {

  vehiculos: any[];
  fechaAdmision

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

    this.http.get('http://localhost:3000/users/vehiculos-gerente', { headers })
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

          vehiculo.Chequeado = false;
          vehiculo.Habilitado = !!vehiculo.Estado;
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
    localStorage.setItem('ultima-pagina', '/cola-espera');
    this.router.navigate(['/detalle-vehiculo']);
  }

  asignarFechaAdmision() {
    let chequeados = this.vehiculos.filter(vehiculo => vehiculo.Chequeado);
    
    if (chequeados.length === 0) {
      return false;
    } 
    else {
      // Guarda la fecha de admision seleccionada
      this.vehiculos
        .filter(vehiculo => vehiculo.Chequeado)
        .map(vehiculo => {
          // Valida que se haya elegido una fecha
          if (this.fechaAdmision != undefined && this.fechaAdmision != '') {
            vehiculo.FechaAdmision = this.fechaAdmision;

            // Impide cambiar la fecha de admision si ya ha sido asignada
            vehiculo.Chequeado = false;
          }
        });

      // Valida que se haya elegido una fecha
      if (this.fechaAdmision != undefined && this.fechaAdmision != '') {
        
        // Construye un arreglo con los datos necesarios
        let arreglo = chequeados.map(vehiculo => {
          return {
            id: vehiculo.id,
            fechaAdmision: vehiculo.FechaAdmision
          }
        });

        // Le pasa el arreglo al API
        this.guardarFechas(arreglo);
      }
    }
  }

  guardarFechas(arreglo) {
    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    this.http.post('http://localhost:3000/users/fecha-admision', arreglo, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        }
      });
  }

  // eliminarVehiculo(indice) {
  //   this.apiService.eliminarVehiculo(this.vehiculos[indice].id).subscribe(response => {
  //     if (response.success) {
  //       this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
  //     } else {
  //       this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
  //     }
  //   });
  // }
}