import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-actualizar-orden',
  templateUrl: './actualizar-orden.component.html',
  styleUrls: ['./actualizar-orden.component.css']
})
export class ActualizarOrdenComponent implements OnInit {
  estado: string;
  repuestos: any[];
  repuestosSeleccionados: any[];
  seleccionado: any;

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.repuestos = [];
    this.repuestosSeleccionados = [];

    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:3000/mecanico/repuestos', { headers })
      .map(res => res.json())
      .subscribe(data => {
        console.log('Repuestos Totales: ', data.repuestos);
        this.repuestos = data.repuestos;
      });
    
    this.http.post('http://localhost:3000/mecanico/repuestos-por-vehiculo', { id: Number(localStorage.getItem('vehiculo-a-actualizar')) }, { headers })
      .map(res => res.json())
      .subscribe(data => {
        console.log('Repuestos Previos: ', data.repuestos);
        this.repuestosSeleccionados = data.repuestos;
      });
  }

  actualizarOrden() {
    const data = {
      estado: this.estado,
      repuestos: this.repuestosSeleccionados,
      vehiculo: Number(localStorage.getItem('vehiculo-a-actualizar'))
    };

    // Validacion
    if (this.estado == undefined || this.repuestosSeleccionados.length == 0)
      return false;
   
    console.log(data);

    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/mecanico/actualizar-orden', data, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
          this.router.navigate(['/lista-reparacion']);
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        }
      });
  }

  agregarRepuesto(indice) {

    if (this.seleccionado != undefined) {
      this.repuestosSeleccionados.push(this.seleccionado);
    }
  }

}
