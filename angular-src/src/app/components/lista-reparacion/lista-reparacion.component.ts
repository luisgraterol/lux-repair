import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-reparacion',
  templateUrl: './lista-reparacion.component.html',
  styleUrls: ['./lista-reparacion.component.css']
})
export class ListaReparacionComponent implements OnInit {

  vehiculos: any[];

  constructor (
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {

    // this.vehiculos = [
    //   {
    //     id: 32,
    //     Marca: 'Chevrolet',
    //     Modelo: 'Aveo',
    //     Placa: 'AA33456',
    //     Color: 'Amarillo',
    //     Servicio: 'Cambio de Aceite',
    //     Estado: ';lakjdsfa',
    //     Activo: true
    //   }
    // ];


    this.apiService.getVehiclesMecanico().subscribe(data => {
      console.log(data.vehiculos);
      this.vehiculos = data.vehiculos;
      localStorage.setItem('vehiculos-mecanico', JSON.stringify(data.vehiculos));
    }, err => {
      console.log('Error al pedir los vehiculos desde ListaReparacionComponent: ', err);
      return false;
    }); 
  }

  irAActualizar(indice) {
    localStorage.setItem('vehiculo-a-actualizar', this.vehiculos[indice].id);
    this.router.navigate(['/actualizar-orden']);
  }

}