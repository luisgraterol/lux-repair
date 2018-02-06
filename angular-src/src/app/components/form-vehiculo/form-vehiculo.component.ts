import { Component, OnInit } from '@angular/core';
import { Text } from '@angular/compiler';

@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent implements OnInit {

  marca: Text;

  constructor() { }

  ngOnInit() { }

  registrarVehiculo() {

  }

}
