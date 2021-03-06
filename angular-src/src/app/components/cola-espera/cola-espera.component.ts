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
            let pickedDate = new Date(this.fechaAdmision);
            pickedDate.setDate(pickedDate.getDate() + 1);
            pickedDate.setHours(0, 0, 0, 0);
            vehiculo.FechaAdmision = pickedDate;

            if (pickedDate < new Date()) {
              vehiculo.FechaAdmision = null;
            }

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
          this.flashMessage.show('La fecha de admisión no puede ser anterior a la fecha de hoy.', { cssClass: 'custom-danger', timeout: 3000 });
          return false;
        }

        // Le pasa el arreglo al API
        this.guardarFechas(chequeados);
      }
    }
  }

  guardarFechas(arreglo) {

    let data = {
      gerente: JSON.parse(localStorage.getItem('user')),
      vehiculos: arreglo
    };

    console.log(data);

    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    this.http.post('http://localhost:3000/users/fecha-admision', data, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        }
      });
  }

  finalizar(indice) {
    this.vehiculos[indice].Estado = 'Listo';

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/gerente/finalizar', {
      vehiculo: this.vehiculos[indice],
      gerente: JSON.parse(localStorage.getItem('user'))
    }, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
        } else {
          this.vehiculos[indice].Estado = 'Reparado';
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        }
      });

    // Elimina el elemento de la interfaz 2 segundos despues
    setTimeout(() => {
      this.vehiculos.splice(indice, 1);
    }, 1000);
  }

  evaluar(indice) {
    let vehiculoAEvaluar = this.vehiculos[indice];
    localStorage.setItem("condicion-entrega", JSON.stringify(vehiculoAEvaluar));
    this.router.navigate(['condicion-entrega']);
  }
}