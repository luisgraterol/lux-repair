import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-solicitar-orden',
  templateUrl: './solicitar-orden.component.html',
  styleUrls: ['./solicitar-orden.component.css']
})
export class SolicitarOrdenComponent implements OnInit {

  idVehiculo: number;
  servicio: string;
  detalles: string;
  imagen: any;

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idVehiculo = Number(localStorage.getItem('vehiculo-con-orden'));
  }

  solicitarOrden() {
    // Chequear que todas las casillas esten llenas
    if (this.servicio == undefined || this.servicio == '' || this.detalles == undefined || this.detalles == '') {
      this.flashMessage.show('Por favor, llene todas las casillas.', { cssClass: 'custom-danger', timeout: 5000 });
      return false;
    } else {
      
      const data = {
        idVehiculo: this.idVehiculo,
        Cliente: JSON.parse(localStorage.getItem('user')),
        Servicio: this.servicio,
        Detalles: this.detalles,
        Imagen: this.imagen
      };

      // Settear los encabezados para la petición al API
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      // Hacer la petición
      this.http.post('users/solicitar-orden', data, { headers })
        .map(res => res.json())
        .subscribe(response => {
          if (response.success) {
            this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
            this.router.navigate(['/garage']);
          } else {
            this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
          }
        });
    }
  }

}
