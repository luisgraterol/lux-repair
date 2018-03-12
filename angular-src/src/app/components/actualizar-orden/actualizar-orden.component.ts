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
  seleccionado: string;

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.repuestos = [];

  }

  actualizarOrden() {
    const data = {
      Estado: this.estado
    };
   
    console.log(data);

    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/mecanico/actualizar-orden', { data }, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          console.log(data);
          this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
          this.router.navigate(['/lista-reparacion']);
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
          this.router.navigate(['/actualizar-orden']);
          console.log(data);
        }
      });
  }

  agregarRepuesto() {
    if (this.seleccionado != '' && this.seleccionado != undefined)
      this.repuestos.push(this.seleccionado);
  }

}
