import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizar-orden',
  templateUrl: './actualizar-orden.component.html',
  styleUrls: ['./actualizar-orden.component.css']
})
export class ActualizarOrdenComponent implements OnInit {

  repuestos: any[];
  seleccionado: string;

  constructor() { }

  ngOnInit() {
    this.repuestos = [];
  }

  agregarRepuesto() {
    this.repuestos.push(this.seleccionado);
  }

}
