import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-orden',
  templateUrl: './actualizar-orden.component.html',
  styleUrls: ['./actualizar-orden.component.css']
})
export class ActualizarOrdenComponent implements OnInit {
  estado: string;
  repuestos: any[];
  seleccionado: string;

  constructor(
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.repuestos = [];

  }
registrarVehiculo() {

    const data = {
      Estado:this.estado
    };
   
    console.log(data);
    // Llamar al metodo del API
    this.apiService.actualizarOrden(data).subscribe(response => {
      if (response.success) {
        console.log(data);
        this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
        this.router.navigate(['/lista-reparacion']);
      } else {
        this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        this.router.navigate(['/actualizar-orden']);
        console.log(data);
      }
    });
  }
  agregarRepuesto() {
    this.repuestos.push(this.seleccionado);
  }

}
