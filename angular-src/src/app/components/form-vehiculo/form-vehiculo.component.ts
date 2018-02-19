import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent implements OnInit {

  marca: string;
  modelo: string;
  ano: String;
  placa: string;
  serial: string;
  color: string;
  puertas: string;
  caja: string;
  condicion: string;
  servicio: string;
  detalles: string;
  
  constructor(
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() { }

  registrarVehiculo() {

    // Valida que no se haya dejado ninguna casilla vacia
    if (this.faltaAlgunaCasilla()) {
      this.flashMessage.show('Por favor, llene todas las casillas.', { cssClass: 'custom-danger', timeout: 5000 });
      return false;
    }

    // Convertimos el string del año a un entero
    const Ano = Number(this.ano);

    // Convertimos el string del nro. de puertas a un entero
    const NroPuertas = Number(this.puertas);

    // Este dato debe guardarse como un booleano
    let EsUnicoDueno = false;
    if (this.condicion === 'Nuevo') {
      EsUnicoDueno = true;
    }

    // Este dato tambien debe guardarse como un booleano
    let EsAutomatico = false;
    if (this.caja === 'Automático') {
      EsAutomatico = true;
    }

    const data = {
      Marca: this.marca,
      Modelo: this.modelo,
      Ano: Ano,
      Placa: this.placa,
      Serial: this.serial,
      Color: this.color,
      NroPuertas: NroPuertas,
      EsAutomatico: EsAutomatico,
      EsUnicoDueno: EsUnicoDueno,
      Servicio: this.servicio,
      Detalles: this.detalles,
    };

    console.log(data);

    // Llamar al metodo del API
    this.apiService.setVehicleData(data).subscribe(response => {
      if (response.success) {
        this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        this.router.navigate(['/form-vehiculo']);
      }
    });
  }

  // Funcion que retorna false si alguna casilla ha dejado de llenarse
  faltaAlgunaCasilla() {
    return (
      this.marca === undefined || 
      this.marca === '' || 
      this.modelo === undefined || 
      this.modelo === '' || 
      this.placa === undefined || 
      this.placa === '' || 
      this.serial === undefined ||
      this.serial === '' ||
      this.color === undefined ||
      this.color === '' ||
      this.ano === undefined ||
      this.puertas === undefined ||
      this.condicion === undefined ||
      this.caja === undefined
      // this.servicio == undefined ||
      // this.detalles == undefined ||
      // this.detalles == ''
    );
  }

}
