import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificar-repuesto',
  templateUrl: './modificar-repuesto.component.html',
  styleUrls: ['./modificar-repuesto.component.css']
})
export class ModificarRepuestoComponent implements OnInit {

  repuesto: any;
  id: number;
  nombre: string;
  descripcion: string;
  cantidad: String;
  tipo: string;
  detalle: string;
  
  constructor(
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() { 

    let repuesto = JSON.parse(localStorage.getItem("modificar-repuesto"));

    this.id = repuesto.id;
    this.nombre = repuesto.Nombre;
    this.cantidad = repuesto.Cantidad;
    this.descripcion = repuesto.Descripcion;
    this.detalle = repuesto.Detalle;
    this.tipo = repuesto.Tipo;
    
  }

  modificarRepuesto() {

    // // Valida que no se haya dejado ninguna casilla vacia
    if (this.faltaAlgunaCasilla()) {
      this.flashMessage.show('Por favor, llene todas las casillas.', { cssClass: 'custom-danger', timeout: 5000 });
      return false;
    }

    // Convertimos el string de la cantidad a un entero
    const cantidad = Number(this.cantidad);

    const data = {
      id: this.id,
      Nombre: this.nombre,
      Descripcion: this.descripcion,
      Cantidad: cantidad,
      Tipo: this.tipo,
      Detalle: this.detalle,
    };

    // Llamar al metodo del API
    this.apiService.modificarRepuesto(data).subscribe(response => {
      if (response.success) {
        this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
        this.router.navigate(['/lista-repuestos']);
      } else {
        this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        this.router.navigate(['/modificar-repuesto']);
      }
    });
  }

  // Funcion que retorna false si alguna casilla ha dejado de llenarse
  faltaAlgunaCasilla() {
    return (
      this.nombre === undefined || 
      this.nombre === '' || 
      this.descripcion === undefined || 
      this.descripcion === '' || 
      this.cantidad === undefined || 
      this.cantidad === '' || 
      this.tipo === undefined ||
      this.tipo === '' ||
      this.detalle === undefined ||
      this.detalle === ''
    );
  }

}
