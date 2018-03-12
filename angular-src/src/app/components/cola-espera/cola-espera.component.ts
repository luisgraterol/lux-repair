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
  fechaAdmision

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
            let pickedDate = new Date(this.fechaAdmision);
            pickedDate.setDate(pickedDate.getDate() + 1);
            pickedDate.setHours(0, 0, 0, 0);
            vehiculo.FechaAdmision = pickedDate;

            // Impide cambiar la fecha de admision si ya ha sido asignada
            vehiculo.Chequeado = false;
          }
        });

      // Valida que se haya elegido una fecha
      if (this.fechaAdmision != undefined && this.fechaAdmision != '') {

        let pickedDate = new Date(this.fechaAdmision);
        pickedDate.setDate(pickedDate.getDate() + 1);
        pickedDate.setHours(0, 0, 0, 0);
        let today = new Date();

        if (pickedDate < today) {
          this.flashMessage.show('La fecha de admisión debe ser después de la fecha de hoy.', { cssClass: 'custom-danger', timeout: 3000 });
          return false;
        }
        
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
    this.apiService.asignarAdmision(arreglo).subscribe(response => {
      if (response.success) {
        this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
      } else {
        this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
      }
    });
  }

  evaluar(indice) {
    let vehiculoAEvaluar = this.vehiculos[indice];
    localStorage.setItem("condicion-entrega", JSON.stringify(vehiculoAEvaluar));
    this.router.navigate(['condicion-entrega']);
  }
}