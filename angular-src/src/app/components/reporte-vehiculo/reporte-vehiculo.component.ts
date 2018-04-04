import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-reporte-vehiculo',
  templateUrl: './reporte-vehiculo.component.html',
  styleUrls: ['./reporte-vehiculo.component.css']
})
export class ReporteVehiculoComponent implements OnInit {

  vehiculos: any[];
  dueno: object;
  elegido: any;
  mecanicos: any;
  ordenes:any;
  test:string;

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:3000/users/vehiculos-gerente-cliente', { headers })
      .map(res => res.json())
      .subscribe(data => {
        data.vehiculos.map(vehiculo => {});

        this.vehiculos = data.vehiculos;
        console.log(this.vehiculos);

        localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
      }, err => {
        console.log('Error al pedir los vehiculos desde ReporteVehiculoComponent: ', err);
        return false;
      });
    
  }

  generar(indice) {

    // Filtra el arreglo y solo deja los ID de los vehiculos
    let chequeados = this.vehiculos
    .filter(vehiculo => !!vehiculo.Chequeado)
    .map(vehiculo => {
      vehiculo.Chequeado = false;
      return vehiculo.id
    });

    // Guarda el ID del vehiculo a buscar
    let idVehiculo = indice+1;
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/gerente/reporte-vehiculo', { id: idVehiculo }, { headers })
      .map(res => res.json())
      .subscribe(data => {
        data.ordenes.map(orden => {         
        });

        this.ordenes = data.ordenes;
        console.log('Ordenes: ', this.ordenes);

        localStorage.setItem('ordenes', JSON.stringify(data.ordenes));
     
        const rows = [JSON.stringify(data.ordenes).replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n').replace('},','\r'+'\n')];
        let csvContent = "data:text/csv;charset=utf-8,";
        rows.forEach(function(rowArray){
          let row = rowArray;
           csvContent += row ;
        }); 
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Reporte-Vehiculo.csv");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the data file named "my_data.csv".
      }, err => {
        console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
        return false;
      });
  }

}