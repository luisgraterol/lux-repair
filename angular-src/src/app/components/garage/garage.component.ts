import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  vehiculos: any[];

  constructor (
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService.getVehicles().subscribe(data => {
      console.log(data.vehiculos);
      this.vehiculos = data.vehiculos;
      localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
    }, err => {
      console.log('Error al pedir los vehiculos desde GarageComponent: ', err);
      return false;
    }); 
  }

  irAOrden(indice) {
    localStorage.setItem('vehiculo-con-orden', this.vehiculos[indice].id);
    this.router.navigate(['/solicitar-orden']);
  }

  eliminarVehiculo(indice) {

    console.log(indice);

    this.apiService.eliminarVehiculo(this.vehiculos[indice].id).subscribe(response => {
      if (response.success) {
        this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
      } else {
        this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
      }
    });

    this.vehiculos.splice(indice, 1);
  }

  cancelarCita(indice) {
    // FALTA
  }
}
