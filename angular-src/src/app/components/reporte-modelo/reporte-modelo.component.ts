import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'app-reporte-modelo',
  templateUrl: './reporte-modelo.component.html',
  styleUrls: ['./reporte-modelo.component.css']
})
export class ReporteModeloComponent implements OnInit {
  ordenes:any;
  elegido: any;

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
  }

  reporteModelo() {
    let headers = new Headers();

    // Busca el token del usuario que esta ingresado en el sistema actualmente
    const token = localStorage.getItem('id_token');

    // Settear los encabezados para la petición al API
    headers.append('Authorization', token);
    headers.append('Content-Type', 'application/json');

    this.http.post('gerente/reporte-modelo', { Modelo: this.elegido }, { headers })
      .map(res => res.json())
      .subscribe(data => {
        data.ordenes.map(orden => {
          
        });

        this.ordenes = data.ordenes;
        console.log('Ordenes: ', this.ordenes);
       

        localStorage.setItem('ordenes', JSON.stringify(data.ordenes));
        const rows = [JSON.stringify(data.ordenes).replace('},',"\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},',"\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},',"\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},',"\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},',"\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},',"\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},',"\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},',"\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n").replace('},', "\r"+"\n")];
        let csvContent = "data:text/csv;charset=utf-8,";
        rows.forEach(function(rowArray){
          let row = rowArray;
           csvContent += row ;
        }); 
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Reporte-Modelo.csv");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the data file named "my_data.csv".
      }, err => {
        console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
        return false;
      });
      
  }

}

