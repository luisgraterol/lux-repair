import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cola-espera',
  templateUrl: './cola-espera.component.html',
  styleUrls: ['./cola-espera.component.css']
})
export class ColaEsperaComponent implements OnInit {

  vehiculos: any[];

  constructor(
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.apiService.getVehiculosGerente().subscribe(data => {

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
    localStorage.setItem('vehiculo-detalle', this.vehiculos[indice].id);
    this.router.navigate(['/detalle-vehiculo']);
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