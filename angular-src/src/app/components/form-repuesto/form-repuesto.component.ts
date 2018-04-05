import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-form-repuesto',
  templateUrl: './form-repuesto.component.html',
  styleUrls: ['./form-repuesto.component.css']
})
export class FormRepuestoComponent implements OnInit {

  nombre: string;
  descripcion: string;
  cantidad: String;
  tipo: string;
  detalle: string;
  
  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() { }

  registrarRepuesto() {

    // // Valida que no se haya dejado ninguna casilla vacia
    if (this.faltaAlgunaCasilla()) {
      this.flashMessage.show('Por favor, llene todas las casillas.', { cssClass: 'custom-danger', timeout: 5000 });
      return false;
    }

    // Convertimos el string de la cantidad a un entero
    const cantidad = Number(this.cantidad);

    const data = {
      Nombre: this.nombre,
      Descripcion: this.descripcion,
      Cantidad: cantidad,
      Tipo: this.tipo,
      Detalle: this.detalle,
    };

    console.log(data);

    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    this.http.post('users/crear-repuesto', data, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
          this.router.navigate(['/lista-repuestos']);
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
          this.router.navigate(['/form-repuesto']);
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
