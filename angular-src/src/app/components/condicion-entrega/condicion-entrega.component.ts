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

  vehiculo: object;
  dueno: object;
  
  constructor(
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() { 

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

  // modificarRepuesto() {

  //   // // Valida que no se haya dejado ninguna casilla vacia
  //   if (this.faltaAlgunaCasilla()) {
  //     this.flashMessage.show('Por favor, llene todas las casillas.', { cssClass: 'custom-danger', timeout: 5000 });
  //     return false;
  //   }

  //   // Convertimos el string de la cantidad a un entero
  //   const cantidad = Number(this.cantidad);

  //   const data = {
  //     id: this.id,
  //     Nombre: this.nombre,
  //     Descripcion: this.descripcion,
  //     Cantidad: cantidad,
  //     Tipo: this.tipo,
  //     Detalle: this.detalle,
  //   };

  //   // Llamar al metodo del API
  //   this.apiService.modificarRepuesto(data).subscribe(response => {
  //     if (response.success) {
  //       this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
  //       this.router.navigate(['/lista-repuestos']);
  //     } else {
  //       this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
  //       this.router.navigate(['/modificar-repuesto']);
  //     }
  //   });
  // }

  // // Funcion que retorna false si alguna casilla ha dejado de llenarse
  // faltaAlgunaCasilla() {
  //   return (
  //     this.nombre === undefined || 
  //     this.nombre === '' || 
  //     this.descripcion === undefined || 
  //     this.descripcion === '' || 
  //     this.cantidad === undefined || 
  //     this.cantidad === '' || 
  //     this.tipo === undefined ||
  //     this.tipo === '' ||
  //     this.detalle === undefined ||
  //     this.detalle === ''
  //   );
  // }

}
