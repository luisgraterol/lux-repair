import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-lista-repuestos',
  templateUrl: './lista-repuestos.component.html',
  styleUrls: ['./lista-repuestos.component.css']
})
export class ListaRepuestosComponent implements OnInit {

  repuestos: any[];

  constructor (
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {

    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:3000/users/repuestos', { headers })
      .map(res => res.json())
      .subscribe(data => {
        console.log(data.repuestos);
        this.repuestos = data.repuestos;
        localStorage.setItem('repuestos', JSON.stringify(data.repuestos));
      }, err => {
        console.log('Error al pedir los repuestos desde Lista-RepuestosComponent: ', err);
        return false;
      }); 
  }

  irModificarRepuesto(indice){
    let repuestoAModificar = this.repuestos[indice];
    localStorage.setItem("modificar-repuesto", JSON.stringify(repuestoAModificar));
    this.router.navigate(['modificar-repuesto']);
  }

}
