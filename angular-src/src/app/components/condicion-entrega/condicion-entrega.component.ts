import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-condicion-entrega',
  templateUrl: './condicion-entrega.component.html',
  styleUrls: ['./condicion-entrega.component.css']
})
export class CondicionEntregaComponent implements OnInit {

  vehiculo: any;
  dueno: object;
  entrega: string;
  vista: string;
  detalle: string;
  
  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() { 

    this.entrega = "";

    let vehiculo = JSON.parse(localStorage.getItem("condicion-entrega"));

    this.vehiculo = vehiculo;
    
    // Toma el ID del dueño del vehiculo
    let id = vehiculo.Cliente;

    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    this.http.post('users/cliente', { id }, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.dueno = response.cliente;
          console.log(this.dueno);
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        }
      }, err => {
        console.log('Error al pedir los datos del dueño desde CondicionEntregaComponent: ', err);
        return false;
      });
  }

  regresar() {
    this.router.navigate(['/cola-espera']);
  }

  agregarACondicion(detalle) {
    this.entrega = this.entrega +" "+ this.vista +": "+ this.detalle +"\n";
    this.detalle = "";
    this.vista = "";
  }

  finalizarCondicion() {

    const data = {
      id: this.vehiculo.id,
      Estado: "Evaluado",
      Evaluacion: this.entrega
    };
    
    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    this.http.post('users/condicion-entrega', data, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
          this.router.navigate(['/cola-espera']);
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
          this.router.navigate(['/condicion-entrega']);
        }
      });
  }

}
