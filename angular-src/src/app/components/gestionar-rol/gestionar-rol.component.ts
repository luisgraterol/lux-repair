import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionar-rol',
  templateUrl: './gestionar-rol.component.html',
  styleUrls: ['./gestionar-rol.component.css']
})
export class GestionarRolComponent implements OnInit {

  empleados: any[];

  constructor(
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {

    // EMPEZAR DESDE AQUI

    this.empleados = [
      {
        id: 21,
        Nombre: 'Roberto',
        Apellido: 'Mendoza',
        Cedula: 22365799,
        Username: 'rmendoza',
        Email: 'rmendoza@me.com'
      },
      {
        id: 21,
        Nombre: 'Roberto',
        Apellido: 'Mendoza',
        Cedula: 22365799,
        Username: 'rmendoza',
        Email: 'rmendoza@me.com'
      },
      {
        id: 21,
        Nombre: 'Roberto',
        Apellido: 'Mendoza',
        Cedula: 22365799,
        Username: 'rmendoza',
        Email: 'rmendoza@me.com'
      },
      {
        id: 21,
        Nombre: 'Roberto',
        Apellido: 'Mendoza',
        Cedula: 22365799,
        Username: 'rmendoza',
        Email: 'rmendoza@me.com'
      }
  ];
    // this.apiService.getEmpleadosSinRol().subscribe(data => {
    //   console.log(data.empleados);
    //   this.empleados = data.empleados;
    //   localStorage.setItem('empleadosSinRol', JSON.stringify(data.empleados));
    // }, err => {
    //   console.log('Error al pedir los empleados desde GestionarRolComponent: ', err);
    //   return false;
    // });
  }

  irAAsignar(indice) {
    // localStorage.setItem('vehiculo-con-orden', this.vehiculos[indice].id);
    // this.router.navigate(['/solicitar-orden']);
  }

}