import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-reporte-mecanico',
  templateUrl: './reporte-mecanico.component.html',
  styleUrls: ['./reporte-mecanico.component.css']
})
export class ReporteMecanicoComponent implements OnInit {
  elegido: any;
  mecanicos: any;
  vehiculos: any;
  ordenes:any;
  test:string;

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {

    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:3000/gerente/vehiculos-y-mecanicos', { headers })
      .map(res => res.json())
      .subscribe(data => {
        data.vehiculos.map(vehiculo => {
          if (vehiculo.FechaSolicitud) {
            // Guarda la fecha formateada
            vehiculo.FechaSolicitud = this.datePipe.transform(vehiculo.FechaSolicitud);
          }

          if (vehiculo.FechaAdmision) {
            // Guarda la fecha formateada
            vehiculo.FechaAdmision = this.datePipe.transform(vehiculo.FechaAdmision);
          }

          data.mecanicos.map(mecanico => {
            if (mecanico.id == vehiculo.Mecanico) {
              vehiculo.Mecanico = mecanico.Nombre;
            }
          })
        });

        this.vehiculos = data.vehiculos;
        console.log('Vehiculos: ', this.vehiculos);
        this.mecanicos = data.mecanicos;
        console.log('Mecanicos: ', this.mecanicos);

        localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
      }, err => {
        console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
        return false;
      });
  }

  reporteMecanico() {
    // Filtra el arreglo y solo deja los ID de los vehiculos
    let chequeados = this.vehiculos
    .filter(vehiculo => !!vehiculo.Chequeado)
    .map(vehiculo => {
      vehiculo.Mecanico = this.elegido.Nombre;
      vehiculo.Chequeado = false;
      return vehiculo.id
    });

    // Guarda el ID del mecanico a asignar
    let idMecanico = this.elegido.id;
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/gerente/reporte-mecanico', { id: idMecanico }, { headers })
      .map(res => res.json())
      .subscribe(data => {
        data.ordenes.map(orden => {
          
        });

        this.ordenes = data.ordenes;
        console.log('Ordenes: ', this.ordenes);


       

        localStorage.setItem('ordenes', JSON.stringify(data.ordenes));
     

        const rows = [JSON.stringify(data.ordenes).replace('},','\r'+'\n')];
        let csvContent = "data:text/csv;charset=utf-8,";
        rows.forEach(function(rowArray){
          let row = rowArray;
           csvContent += row ;
        }); 
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Reporte-Mecanico.csv");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the data file named "my_data.csv".
      }, err => {
        console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
        return false;
      });
      
  }

}
