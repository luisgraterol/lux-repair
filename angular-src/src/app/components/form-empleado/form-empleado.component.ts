import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {

  sexo: string;
  fechaNacimiento: string;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() { }

  agregarDatos() {

    // Validacion de las Casillas
    if (this.sexo == undefined || this.fechaNacimiento == undefined) {
      this.flashMessage.show('Por favor llene todas las casillas.', { cssClass: 'custom-danger', timeout: 5000 });
      return false;
    }

    // Validar de la Fecha de Nacimiento
    if (new Date(this.fechaNacimiento) > new Date()) {
      this.flashMessage.show('La fecha ingresada es invalida.', { cssClass: 'custom-danger', timeout: 5000 });
      return false;
    }

    this.apiService.setEmployeeData({ sexo: this.sexo, fechaNacimiento: this.fechaNacimiento }).subscribe(response => {
      if (response.success) {
        this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
        this.router.navigate(['/profile']);
      } else {
        this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
        this.router.navigate(['/form-empleado']);
      }
    });
  }
}
