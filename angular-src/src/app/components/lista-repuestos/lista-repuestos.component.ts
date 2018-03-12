import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-repuestos',
  templateUrl: './lista-repuestos.component.html',
  styleUrls: ['./lista-repuestos.component.css']
})
export class ListaRepuestosComponent implements OnInit {

  repuestos: any[];

  constructor (
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService.getRepuestos().subscribe(data => {
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
