import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent implements OnInit {

  marca: String;
  modelo: String;
  año: String;
  placa: String;
  serial: String;
  color: String;
  puertas: String;
  caja: String;
  condición: String;
  servicio: String;
  detalles: String;
  
  constructor() { }

  ngOnInit() { }

  registrarVehiculo() {
    
  }

}
