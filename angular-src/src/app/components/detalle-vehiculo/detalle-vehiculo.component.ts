import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-detalle-vehiculo',
  templateUrl: './detalle-vehiculo.component.html',
  styleUrls: ['./detalle-vehiculo.component.css']
})
export class DetalleVehiculoComponent implements OnInit {

  vehiculo: object;
  dueno: object;
  tengoQR: boolean;

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {

    let idCliente = '';

    if (localStorage.getItem('lleguePorQR') == 'true') {

      this.tengoQR = true;

      this.vehiculo = JSON.parse(localStorage.getItem('vehiculoQR'));
      idCliente = JSON.parse(localStorage.getItem('vehiculoQR')).Cliente;

      localStorage.setItem('vehiculo-detalle', '0');
      localStorage.setItem('ultima-pagina', 'lector-qr');

    } else {

      // Toma el indice del carro a mostrar de localStorage
      let indice = Number(localStorage.getItem('vehiculo-detalle'));

      // Toma el arreglo entero de vehiculos de localStorage
      let arreglo = JSON.parse(localStorage.getItem('vehiculos'));

      // Guarda la informacion del vehiculo a mostrar
      this.vehiculo = arreglo[indice];

      if (arreglo[indice].codigoQR) {
        this.tengoQR = true;
      }

      console.log(this.vehiculo);

      // Toma el ID del dueño del vehiculo
      idCliente = arreglo[indice].Cliente;

      localStorage.setItem('ultima-pagina', 'cola-espera');
    }

    let headers = new Headers();

    // Settear los encabezados para la petición al API
    headers.append('Authorization', localStorage.getItem('id_token'));
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/users/cliente', { idCliente }, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.dueno = response.cliente;
          console.log(this.dueno);
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        }
      }, err => {
        console.log('Error al pedir los datos del dueño desde DetalleVehiculoComponent: ', err);
        return false;
      });
  }

  regresar() {
    localStorage.setItem('lleguePorQR', 'false');
    localStorage.setItem('vehiculoQR', null);
    this.router.navigate([localStorage.getItem('ultima-pagina')]);
  }
}
