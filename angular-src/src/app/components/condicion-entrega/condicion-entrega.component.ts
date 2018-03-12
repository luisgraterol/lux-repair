import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


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
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() { 

    this.entrega = "";

    let vehiculo = JSON.parse(localStorage.getItem("condicion-entrega"));

    this.vehiculo = vehiculo;
    
    // Toma el ID del dueño del vehiculo
    let idCliente = vehiculo.Cliente;
    
    // Busca los datos del dueño
    this.apiService.getDueno(idCliente).subscribe(response => {
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

    // Llamar al metodo del API
    this.apiService.condicionEntrega(data).subscribe(response => {
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
